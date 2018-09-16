package com.elements.elementdistributions.repository;


import com.elements.elementdistributions.entity.SubCategoryDao;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface SubCategoryRepository extends JpaRepository<SubCategoryDao, Integer> {

    List<SubCategoryDao> findAll();

    List<SubCategoryDao> findAllByCategoryIdOrderByNameAsc(int categoryId);
}
