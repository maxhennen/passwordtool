package com.example.passwordtool.dao;

import com.example.passwordtool.models.Password;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PasswordRepository extends JpaRepository<Password,Long> {

}
