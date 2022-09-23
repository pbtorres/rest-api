package com.torres.springBoot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.torres.springBoot.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
