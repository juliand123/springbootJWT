package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.IUserDao;
import com.cursojava.curso.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private IUserDao iUserDao;

    @RequestMapping(value = "api/users/{id}", method = RequestMethod.GET)
    public User getUser(@PathVariable Long id){
        User user = new User();
        user.setId(id);
        user.setName("toño");
        user.setLastname("araujo");
        user.setEmail("araujo22@hotmail.com");
        user.setPhone("3007811262");
        user.setPassword("123456");
        return user;
    }

    @RequestMapping(value = "api/users")
    public List<User> GetUsers() {
        return iUserDao.getUsers();
    }

    @RequestMapping(value = "api/users/{id}", method = RequestMethod.DELETE)
    public void Delete( @PathVariable Long id){
        iUserDao.Delete(id);
    }

}
