package com.elements.elementdistributions.repository;

import com.elements.elementdistributions.entity.ProductInventoryDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface ProductInventoryRepository extends JpaRepository<ProductInventoryDao, Integer> {

    // This query help to get oldest data from inventory table cause we need to manage inventory by FIFO.
    ProductInventoryDao findFirstByProductNoOrderByCreatedTimestampAsc(String productNo);

    List<ProductInventoryDao> findAllByProductId(int productId);
    List<ProductInventoryDao> findAllByProductIdAndProductNo(int productId, String productNo);
    @Query("SELECT i FROM ProductInventoryDao i WHERE i.createdTimestamp = '2017-10-08 12:49:42' ")
    ProductInventoryDao test();

    @Query("SELECT COUNT(productNo) FROM ProductInventoryDao WHERE productNo = ?1")
    int getCountOfRowByProductNo(String productNo);

    @Modifying
    @Query("UPDATE ProductInventoryDao SET tier1 = ?1, tier2 = ?2, tier3 = ?3 WHERE productNo = ?4")
    void updateProductRetailPrice(double tier1, double tier2, double tier3, String productNo);

    @Modifying
    @Query("UPDATE ProductInventoryDao p SET p.productNo = ?1 where p.productNo = ?2 and p.productId = ?3")
    void updateProductNo(String newProductNo, String oldProductNo, int productId);
}
