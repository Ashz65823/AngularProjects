package com.zensar.displayservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
/**
 * 
 * @author AA65823
 *	Following annotation eureka server
 * @EnableEurekaClient -This is Must on top of class acting as Eureka Server to start
 * 
 * @EnableFeignClients -Is MUST on top of Feign client classes to enable Feign Client,
 * 		-Otherwise feign won't work
 */
@EnableEurekaClient
@EnableFeignClients
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
