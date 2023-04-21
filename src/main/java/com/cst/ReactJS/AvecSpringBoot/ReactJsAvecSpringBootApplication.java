package com.cst.ReactJS.AvecSpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ReactJsAvecSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactJsAvecSpringBootApplication.class, args);
	}

	// @GetMapping("/hello")
	// public String hello(@RequestParam (value="name", defaultValue = "springboot")
	// String name) {
	// return String.format(format: "Hello %s", name)
	// } 
}
