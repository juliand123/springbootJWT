package com.cursojava.curso.dao;

import com.cursojava.curso.models.User;

import java.util.List;

public interface IUserDao {

    List<User> getUsers();
    void Delete(Long id);
}
