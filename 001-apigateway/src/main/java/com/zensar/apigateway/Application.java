package com.zensar.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 
 * @author AA65823
 *API gateway works with eureka server to route request to appropriate micro-service
 *-Any common code which needs to be executed before and/or after every request to any microSevice need to be written here
 *-Any request from client will be handled by api gateway
 *-Also Micro-service internal communication also routed though API gateway
 *
 *-apigateway itself is client to eureka server
 *
 */
@SpringBootApplication
@EnableEurekaClient//tell it a eureka client
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
