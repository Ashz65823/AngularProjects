package com.zensar.messageservice.rest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
public class MessageRestController {

	@GetMapping
	public String generateMessage()
	{
		
		return "Good Morning";
	}
	
	@GetMapping("/view/{str}")
	public String GetMessage(@PathVariable String str)
	{
		str=str.toUpperCase();
		return "/n Welcome to Micro Service "+str;
	}
}
