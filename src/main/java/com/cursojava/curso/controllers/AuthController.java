package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.IUserDao;
import com.cursojava.curso.dao.UserDaoImpl;
import com.cursojava.curso.models.User;
import com.cursojava.curso.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private IUserDao iUserDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody User user) {

        User userLogged = iUserDao.GetUserWithCredentials(user);

        if(userLogged!= null) {

            String tokenJWT = jwtUtil.create(String.valueOf(userLogged.getId()), userLogged.getEmail());

            return tokenJWT;
        }
        return "FAIL";
        }

}
