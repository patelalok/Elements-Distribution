package com.elements.elementdistributions.security;

import com.elements.elementdistributions.dto.CustomerDao;
import com.elements.elementdistributions.entity.Authority;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.stream.Collectors;


public final class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser create(CustomerDao customerDao) {
        return new JwtUser(0L, customerDao.getEmail(), customerDao.getName(), customerDao.getName(), customerDao.getEmail(), customerDao.getPassword(),
                mapToGrantedAuthorities(customerDao.getAuthorities()), true, null);
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Authority> authorities) {
        return authorities.stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getName().name()))
                .collect(Collectors.toList());
    }
}
