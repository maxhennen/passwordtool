package com.example.passwordtool.controller;

import com.example.passwordtool.dao.PasswordRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PasswordController {
    private PasswordRepository repository;

    public PasswordController(PasswordRepository repository) {
        this.repository = repository;
    }


}
