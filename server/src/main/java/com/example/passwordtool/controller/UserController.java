package com.example.passwordtool.controller;

import com.example.passwordtool.models.User;
import com.example.passwordtool.dao.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.util.Collection;

@RestController
public class UserController {
    private UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/all-users")
    public Collection<User> allUsers(){
        return repository.findAll();
    }


}
