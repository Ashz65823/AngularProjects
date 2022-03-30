package com.zensar.displayservice.feign.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 
 * @author AA65823
 * here @FeignClient(value="messageservice")
 * value is name of microservice as registered with eureka 
 * 
 * 
 * We want any communication among microservces through API gateways
 * 
 * todo that
 * 
 * @FeignClient(value="apigateway")- value is name of API gateway microservice as registred with eureka
 */
//@FeignClient(value="messageservice")

@FeignClient(value="apigateway")
public interface MessageServiceFeignClient {
	/*-------------My comment----------------------
	 * This message signature is from MessageRestController
	 * public String getMessage()-->this is the message name in MessageRestController
	 * The signature of method is impotent not the method name*/
	/**
	 * -----------Sir Comment----------
	 * Following method signature MUST match with the signature of service method we are interested in calling
	 * In out case method signature Must match with MssageRestController -generateMessage() method
	 * 
	 * Following method can be named anything
	 * ------------------------------------
	 * Approach 1
	 * 
	 * URL pattern written here must be URL pattern of generateMessage() method
	 * @GetMapping(path="/api/message")
	 * -----------------------------------------------------
	 * Approach 2
	 * 
	 * @GetMapping(path="/messageservice/api/message")
	 * Here first part of the Url is name of micro service 
	 * 		second -------""-------is url pattern of GetMessage()method of micro service
	 */
	
	//String response=rest.getForObject("http://localhost:8085/api/message",String.class);
	@GetMapping(path="/messageservice/api/message")
	public String callMessage();
	
	@GetMapping("/api/message/view/{m}")
	public String viewMessage(@PathVariable("m") String string);

}
