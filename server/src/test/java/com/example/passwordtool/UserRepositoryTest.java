package com.example.passwordtool;

import com.example.passwordtool.dao.UserRepository;
import com.example.passwordtool.models.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Before
    public void setUp() throws Exception {
        User user1 = new User("Max@max.nl","Max","max123",false);

        this.userRepository.save(user1);
    }

    @Test
    public void testFetchData(){

    }
}
