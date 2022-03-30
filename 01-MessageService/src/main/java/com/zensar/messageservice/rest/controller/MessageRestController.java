package com.zensar.messageservice.rest.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
@RefreshScope
public class MessageRestController {

	@Value("${organisation}")
	private String company;
	
	@GetMapping
	public String generateMessage()
	{
		
		return "Welcome to "+company;
	}
	
	@GetMapping("/view/{str}")
	public String GetMessage(@PathVariable String str)
	{
		str=str.toUpperCase();
		return "\n Welcome to Micro Service "+str;
	}
}
