package com.elements.elementdistributions.security.service;

import com.elements.elementdistributions.dto.CustomerDao;
import com.elements.elementdistributions.repository.CustomerRepository;
import com.elements.elementdistributions.security.JwtUserFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CustomerDao customerDao = customerRepository.findByEmail(username);

        if (customerDao == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            return JwtUserFactory.create(customerDao);
        }
    }
}
