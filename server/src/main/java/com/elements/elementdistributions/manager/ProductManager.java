package com.elements.elementdistributions.manager;

import com.elements.elementdistributions.dto.ProductEcomerceDto;
import com.elements.elementdistributions.entity.ProductInventoryDao;
import com.elements.elementdistributions.entity.ProductVariantDao;
import com.elements.elementdistributions.repository.ProductInventoryRepository;
import com.elements.elementdistributions.repository.ProductRepository;
import com.elements.elementdistributions.repository.ProductVariantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.support.SqlLobValue;
import org.springframework.jdbc.support.lob.DefaultLobHandler;
import org.springframework.jdbc.support.lob.LobHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

@Component
public class ProductManager {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductVariantRepository productVariantRepository;

    @Autowired
    private ProductInventoryRepository productInventoryRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<ProductEcomerceDto> getProductForSearch(String searchInput) {

        List<Object[]> result = productRepository.getProductForSearch(searchInput);
        return setEcomerceDto(result);
    }


    public List<ProductEcomerceDto> getEcommerceProductsByCategory(int categoryId) {

        List<Object[]> result = productRepository.getEcommerceProductsByCategory(categoryId);
        return setEcomerceDto(result);
    }

    public List<ProductEcomerceDto> getEcommerceProductsByModel(int modelId) {

        List<Object[]> result = productRepository.getEcommerceProductsByBrand(modelId);
        return setEcomerceDto(result);
    }

    public List<ProductEcomerceDto> getProductDetails() {

        List<Object[]> result = productRepository.getProductForSearchBar();
        List<ProductEcomerceDto> productEcomerceDtoList = new ArrayList<>();

        if(null != result)
        {
            for(Object[] j: result)
            {
                ProductEcomerceDto productEcomerceDto = new ProductEcomerceDto();

                productEcomerceDto.setProductNo(j[0].toString());
                productEcomerceDto.setDescription(j[1].toString());
//                productEcomerceDto.setRetail(Double.parseDouble(j[2].toString()));

                productEcomerceDtoList.add(productEcomerceDto);
            }
        }
        return productEcomerceDtoList;
    }

    private List<ProductEcomerceDto>setEcomerceDto(List<Object[]> result){

        List<ProductEcomerceDto> productEcomerceDtoList = new ArrayList<>();

        if(null != result) {
            for (Object[] j : result)
            {
                ProductEcomerceDto productEcomerceDto = new ProductEcomerceDto();

                productEcomerceDto.setProductId(Integer.parseInt(j[0].toString()));
                productEcomerceDto.setProductNo(j[1].toString());
                productEcomerceDto.setDescription(j[2].toString());
                if(null != j[3]){
                    productEcomerceDto.setCategoryId(j[3].toString());
                }
                productEcomerceDto.setBrandId(j[4].toString());
                productEcomerceDto.setVendorId(j[5].toString());
                if(null != j[6]){
                    productEcomerceDto.setModelId(j[6].toString());
                }

                productEcomerceDto.setNewProduct(Integer.parseInt(j[7].toString()) > 0);
                productEcomerceDto.setOnSale(Integer.parseInt(j[8].toString()) > 0);
                productEcomerceDto.setFeatured(Integer.parseInt(j[9].toString()) > 0);

                if(null != j[10]) {

                    productEcomerceDto.setImage((byte[]) j[10]);

                    // This is helpful to send null on ui so i can show no image found image, otherwise its sending [] this ui and only description is showing on product grid.
                    if(productEcomerceDto.getImage().length < 1)
                    {
                        productEcomerceDto.setImage(null);
                    }
                }

                productEcomerceDto.setTier1(Double.parseDouble(j[11].toString()));
                productEcomerceDto.setTier2(Double.parseDouble(j[12].toString()));
                productEcomerceDto.setTier3(Double.parseDouble(j[13].toString()));
                productEcomerceDto.setQuantity(Integer.parseInt(j[14].toString()));



                productEcomerceDtoList.add(productEcomerceDto);
            }
        }

        return productEcomerceDtoList;
    }

        public void insertProductImage(String productNo, MultipartFile image_file) throws IOException {

            LobHandler lobHandler = new DefaultLobHandler();

            //Here getting image as MultipartFile and then getting input stream of the file and then getting the size of the file.
            SqlLobValue lobValue = new SqlLobValue(image_file.getInputStream(), (int) image_file.getSize(), lobHandler);

            int a = jdbcTemplate.update("UPDATE product_image SET image = ? WHERE product_no = ?" ,new Object[]{lobValue, productNo}, new int[] {Types.BLOB, Types.LONGNVARCHAR} );
//                jdbcTemplate.update("INSERT INTO  product_image ('product_no', 'image') VALUE (?1,?2)" , lobValue, productNo);
            System.out.println(a);
        }

    public List<ProductEcomerceDto> getAllProduct() {

        return  setEcomerceDto(productRepository.getAllActiveProducts());
    }

    public List<ProductEcomerceDto> getFeaturedProducts() {
        return setEcomerceDto(productRepository.getAllFeaturedProducts());
    }

    public List<ProductEcomerceDto> getNewProducts() {
        return setEcomerceDto(productRepository.getAllNewProducts());

    }

    public List<ProductEcomerceDto> getProductsBySubCategory(int subCategoryId) {

        List<Object[]> result = productRepository.getEcommerceProductsBySubCategory(subCategoryId);
        return setEcomerceDto(result);
    }

    public List<ProductVariantDao> getProductVariantById(int productId) {


        List<ProductVariantDao> productVariantDaoList = new ArrayList<>();
        List<ProductVariantDao> newProductVariantDaoList = new ArrayList<>();

        productVariantDaoList = productVariantRepository.findAllByProductIdAndActive(productId, true);

        List<Object[]> result = productRepository.getProductByProductId(productId);


        for (ProductVariantDao productVariantDao : productVariantDaoList) {
            int totalQuantity = 0;

            List<ProductInventoryDao> productInventoryDao = productInventoryRepository.findAllByProductIdAndProductNo(productVariantDao.getProductId(), productVariantDao.getProductNo());
            for (ProductInventoryDao p : productInventoryDao) {

                if (p.getQuantity() > 0) {
                    totalQuantity = totalQuantity + p.getQuantity();
                }
            }

            if (productInventoryDao.size() > 0) {
                productVariantDao.setQuantity(totalQuantity);
                // PLEASE DO NOT SEND COST PRICE TO UI.
                //productVariantDao.setCost(productInventoryDao.get(0).getCost());
                productVariantDao.setTier1(productInventoryDao.get(0).getTier1());
                productVariantDao.setTier2(productInventoryDao.get(0).getTier2());
                productVariantDao.setTier3(productInventoryDao.get(0).getTier3());

                newProductVariantDaoList.add(productVariantDao);

            }
        }

        return newProductVariantDaoList;
    }

    public List<ProductEcomerceDto> getProductsByBrand(int brandId) {

        List<Object[]> result = productRepository.getEcommerceProductsByBrand(brandId);
        return setEcomerceDto(result);
    }
}
