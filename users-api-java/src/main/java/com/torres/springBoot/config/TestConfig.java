package com.torres.springBoot.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.torres.springBoot.entities.User;
import com.torres.springBoot.repositories.UserRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		User u1 = new User(null, "Paulo", "paulo@gmail.com", "99999999999", "123");
		User u2 = new User(null, "João", "joao@gmail.com", "99999999999", "123");
		
		userRepository.saveAll(Arrays.asList(u1, u2));
		
	}

}
