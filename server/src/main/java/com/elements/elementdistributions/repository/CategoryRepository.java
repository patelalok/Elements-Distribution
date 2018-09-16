package com.elements.elementdistributions.repository;

import com.elements.elementdistributions.entity.CategoryDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by apatel2 on 5/16/17.
 */

@Transactional
public interface CategoryRepository extends JpaRepository<CategoryDao, Integer> {

    List<CategoryDao> findAllByOrderByNameAsc();


    @Query(value = "SELECT c.category_id, c.name, c.category_image FROM category c where c.ecommerce = 1 ORDER BY c.name", nativeQuery = true)
    List<Object[]> getAllCategories();
}
