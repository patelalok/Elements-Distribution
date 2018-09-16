package com.elements.elementdistributions.repository;

import com.elements.elementdistributions.entity.ResetPasswordToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResetPasswordRepository extends JpaRepository<ResetPasswordToken, String> {

    ResetPasswordToken findFirstByEmailOrderByCreatedDateDesc(String email);
}
