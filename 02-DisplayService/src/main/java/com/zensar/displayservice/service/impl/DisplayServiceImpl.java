package com.zensar.displayservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.displayservice.feign.client.MessageServiceFeignClient;

@Service
public class DisplayServiceImpl {
	@Autowired	
	private MessageServiceFeignClient feignClient;	
	public String fetchData()
	{
		String responce=feignClient.callMessage();
		return responce;
	}
}