package com.example.passwordtool.commandlinerunner;

import com.example.passwordtool.models.User;
import com.example.passwordtool.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class UserCommandLineRunner implements CommandLineRunner {
    private final UserRepository repository;

    public UserCommandLineRunner(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        repository.save(new User("max.hennen@planet.nl","Max"));
        repository.save(new User("max.max@planet.nl","Jan"));
        repository.save(new User("max.max@max.nl","Henk"));

        repository.findAll().forEach(System.out::println);
    }
}
