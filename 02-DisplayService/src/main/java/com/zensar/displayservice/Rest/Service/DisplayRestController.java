package com.zensar.displayservice.Rest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.zensar.displayservice.feign.client.MessageServiceFeignClient;
import com.zensar.displayservice.service.impl.DisplayServiceImpl;

@RestController
@RefreshScope
public class DisplayRestController {

	@Value("${organisation}")
	private String company;
	
	@Autowired
	private DisplayServiceImpl service;

	@GetMapping("/api/display")
	public String display() {
		/*
		 * The following call we are hard cording IP and port of message service If
		 * message service is deployed on other service(different IP) This code is
		 * affected,bad idea We need a solution by which we can identify micro-service
		 * with some "unique name" Instead of IP and Port we will use "unique name" we
		 * have to register every micro-service with some unique name... But where?
		 * Spring cloud gives you a solution -Eureka (Registry Service)
		 */

		// In order to simplify REST call by using micro Services application name and
		// avoid using IP and port
		// Spring cloud give one solution known as
		// Open feign

		// Steps to use open feign
		/*
		 * Add dependency in pom.xml in display servic(Because it use rest)
		 * 
		 */

		// RestTemplate rest=new RestTemplate();
		
		
		String responce=service.fetchData();
		System.out.println("Display Message " + responce);
		return "Message from Message service is " + responce+" "+this.company;
	}

	/*
	 * @GetMapping("/api/view/{msg}") public String view(@PathVariable String msg) {
	 * String responce=feignClient.viewMessage(msg);
	 * System.out.println("Display Message "+responce); return
	 * "Message from Message service is "+responce; }
	 */
	/**
	 * String response=feignClient.callMessage(); the above call is making network
	 * call so it is risky,it might not work--(if network not available or other
	 * call is slow) e.g.,Message service is down. If it is DisplayService also will
	 * not work and if any service is called by Display service -that also will
	 * might not work too..This is called "Cascading Failure" we don't want this
	 * situation in our application so what is the solution? Spring cloud gives you
	 * solution know as -CircuitBreaks
	 */

}
