package com.zensar.configserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
/**
 * 
 * @author AA65823
 *@EnableConfigServer- This annotation makes this application as config server
 *config server acts as client to eureka server. Hence @EnableEurekaClient
 *
 */
/**
 * By default configServer provide one rest end point that is specified below 
 *http://localhost:8888/application/default
 *
 */
@EnableConfigServer
public class ConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigServerApplication.class, args);
	}

}
