package com.zensar.displayservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.displayservice.feign.client.MessageServiceFeignClient;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@Service
public class DisplayServiceImpl {
	@Autowired	
	private MessageServiceFeignClient feignClient;
	
	@CircuitBreaker(name="messageservice",fallbackMethod = "handle")
	public String fetchData()
	{
		/**
		 * Following call is making network call so it is risky , it might not work
		 * String response=feignClient.callMessage(); the above call is making network
		 * call so it is risky,it might not work--(if network not available or other
		 * call is slow) e.g.,Message service is down. If it is DisplayService also will
		 * not work and if any service is called by Display service -that also will
		 * might not work too..This is called "Cascading Failure" we don't want this
		 * situation in our application so what is the solution? Spring cloud gives you
		 * solution know as -CircuitBreaks
		 * 
		 * Fault Tolerance?
		 * 	It is ability of the system to work without problems despite of failures of one/more of it's component
		 * 
		 * How many last calls to consider for deciding whether remote microservice is available or not
		 * 
		 * how many % of calls of last number of calls configuration to decide whether remote microservice is available or not
		 * 50 
		 *  
		 * stages of circuit
		 * 	-OPEN 				-BAD
		 * 	-CLOSED				-Good
		 * 	-HALF-OPEN 			-Becoming bad or good/Becoming good
		 * 	
		 * 
		 * what if remote microservice is available-situation is as per expectation(All is well)
		 * Circuit state is - CLOSED
		 * 
		 * Circuit state is- OPEN
		 * what is remote microservice is not available - Situation is as per expectation
		 * 
		 * HALF-OPEN
		 */
		String responce=feignClient.callMessage();
		return responce;
	}
	
	//FallBackMethod signature must exactly match with the signature of remote Micro-service method which we were trying to call
	//expect FallBackMethos as argument Throwable 
	//If message service is not available this method is automatically called for default message
	
	/**
	 * This method Must have additional one argument of type throwable
	 */
	public String handle(Throwable throwable )
	{
		throwable.printStackTrace();
		return "This is default message";
	}
}
