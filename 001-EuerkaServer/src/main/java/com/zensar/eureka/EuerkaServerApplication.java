package com.zensar.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
//following annotation enables eureka server
@EnableEurekaServer
public class EuerkaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EuerkaServerApplication.class, args);
	}

}
