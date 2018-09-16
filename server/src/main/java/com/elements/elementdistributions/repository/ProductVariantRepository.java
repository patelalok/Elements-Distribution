package com.elements.elementdistributions.repository;

import com.elements.elementdistributions.entity.ProductVariantDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by apatel2 on 5/16/17.
 */

@Transactional
public interface ProductVariantRepository extends JpaRepository<ProductVariantDao, Integer> {

    List<ProductVariantDao> findAll();

    List<ProductVariantDao> findAllByProductIdAndActive(Integer productId, Boolean active);

    @Query(value = "SELECT distinct\n" +
            "v.product_no, \n" +
            "v.product_id,\n" +
            "v.variant1,\n" +
            "v.value1,\n" +
            "v.variant2,\n" +
            "v.value2,\n" +
            "v.variant3,\n" +
            "v.value3,\n" +
            "i.tier1,\n" +
            "i.tier2,\n" +
            "i.tier3,\n" +
            "CONCAT(p.description, ' ',ifnull(v.variant1, ''), ' ',ifnull(v.value1, ''), ' ',ifnull(v.variant2,''), ' ', ifnull(v.value2, ''), ' ',ifnull(v.variant3,''), ' ', ifnull(v.value3, '')) as description,\n" +
            "sum(i.quantity)\n" +
            "from product_variant v \n" +
            "inner join product_inventory i \n" +
            "on i.product_no = v.product_no\n" +
            "inner join product p\n" +
            "on p.product_id = v.product_id\n" +
            "group by \n" +
            "v.product_no, \n" +
            "v.product_id,\n" +
            "v.variant1,\n" +
            "v.value1,\n" +
            "v.variant2,\n" +
            "v.value2,\n" +
            "v.variant3,\n" +
            "v.value3,\n" +
            "i.tier1,\n" +
            "i.tier2,\n" +
            "i.tier3,\n" +
            "description", nativeQuery = true)
    List<Object[]> getProductVariantInventoryDetails();

    @Modifying
    @Query("UPDATE ProductVariantDao SET active = false WHERE productNo = ?1")
    void deleteProductVariant(String productNo);
}
