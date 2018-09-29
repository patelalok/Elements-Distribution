package com.elements.elementdistributions.manager;


import com.elements.elementdistributions.dto.MenuDto;
import com.elements.elementdistributions.dto.WebBrandDto;
import com.elements.elementdistributions.entity.BrandDao;
import com.elements.elementdistributions.entity.CategoryDao;
import com.elements.elementdistributions.entity.SubCategoryDao;
import com.elements.elementdistributions.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class WebMenuManager {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    private ModelRepository modelRepository;
    @Autowired
    private SubCategoryRepository subCategoryRepository;
    

    public MenuDto getWebMenu() {

        MenuDto menuDto = new MenuDto();

        List<CategoryDao> categoryDtoList;
        List<BrandDao> brandDtoList;
        List<SubCategoryDao> subCategoryDaoList;

        List<WebBrandDto> webBrandDtoList = new ArrayList<WebBrandDto>();

        List<Object[]> categoriesResult = categoryRepository.getAllCategories();
        categoryDtoList = setCategoryDetail(categoriesResult);

        List<Object[]> result = brandRepository.getAllBrands("E-LIQUIDS");
        brandDtoList =  setBrandDetails(result);

        for(int i = 0; i<brandDtoList.size(); i++)
        {
            WebBrandDto webBrandDto = new WebBrandDto();
            webBrandDto.setBrandId(brandDtoList.get(i).getBrandId());
            webBrandDto.setBrandName(brandDtoList.get(i).getName());
            webBrandDto.setBrandImage(brandDtoList.get(i).getBrandImage());

            webBrandDtoList.add(webBrandDto);
            webBrandDtoList.set(i, webBrandDto);
        }
        menuDto.setWebBrandDtoList(webBrandDtoList);

        for(int i = 0; i < categoryDtoList.size(); i++)
        {
            subCategoryDaoList = getAllSubCategoryForCategory(categoryDtoList.get(i).getCategoryId());
            categoryDtoList.get(i).setSubCategoryDaoList(subCategoryDaoList);
        }

        menuDto.setCategoryDtoList(categoryDtoList);

        System.out.println("Send Web Menu Details Successfully");

        return menuDto;
    }

    private List<SubCategoryDao> getAllSubCategoryForCategory(int categoryId) {

        List<SubCategoryDao> subCategoryDaoList = new ArrayList<>();

        subCategoryDaoList = subCategoryRepository.findAllByCategoryIdOrderByNameAsc(categoryId);
        return subCategoryDaoList;
    }

    private List<CategoryDao> setCategoryDetail(List<Object[]> categoriesResult) {

        List<CategoryDao> categoryDaoList = new ArrayList<>();

        if(null != categoriesResult)
        {
            for (Object[] j : categoriesResult)
                {
                    CategoryDao categoryDao = new CategoryDao();

                    categoryDao.setCategoryId(Integer.parseInt(j[0].toString()));
                    categoryDao.setName(j[1].toString());
                    if(null != j[2]) {
                        categoryDao.setCategoryImage((byte[]) j[2]);
                    }
                    categoryDaoList.add(categoryDao);
                }
        }
        return categoryDaoList;
    }

    private List<BrandDao>setBrandDetails(List<Object[]> result){

        List<BrandDao> brandDaoList = new ArrayList<>();

        if(null != result) {
            for (Object[] j : result)
            {
                BrandDao brandDao = new BrandDao();

                brandDao.setBrandId(Integer.parseInt(j[0].toString()));
                brandDao.setName(j[1].toString());
                if(null != j[2]) {
                    brandDao.setDescription(j[2].toString());
                }
                if(null != j[3]) {
                    brandDao.setBrandImage((byte[]) j[3]);
                }
                brandDaoList.add(brandDao);
            }
        }
        return brandDaoList;
    }

}
