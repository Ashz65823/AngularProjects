package com.zensar.messageservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
//@EnableEurekaClient
/**
 * 
 * @author AA65823
 * @EnableEurekaClient
 * 	writing this annotation on Eureka client service is optional 
 * 	Just having following dependency automatically registers this client with Eureka 
 * 		<dependency>
			<groupId>org.springframework.cloud</groupId>
			<artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
		</dependency>
 * It is recommended(Mandadtory) to annotate client with @EnableEurekaClient to improve readability
 * 
 * @EnableEurekaClient- This annotation is specific to netflix hence client code gets tightly coupled to netflix
 * We should use standard annotation
 * 
 * @EnableDiscoveryClient- This annotation is given by spring cloud
 * It is recommended to annotate client with @EnableDiscoveryClient to improve readability and avoid tightly coupled
 * 
 */
@EnableDiscoveryClient
public class MessageServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MessageServiceApplication.class, args);
	}

}