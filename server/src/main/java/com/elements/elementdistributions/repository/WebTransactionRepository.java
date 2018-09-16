package com.elements.elementdistributions.repository;

import com.elements.elementdistributions.entity.WebTransactionDao;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface WebTransactionRepository extends JpaRepository<WebTransactionDao, Integer> {

    WebTransactionDao findOneByCustomerPhoneno(String phoneNo);
}
