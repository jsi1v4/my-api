package com.jsi1v4.myapi.controllers;

import com.jsi1v4.myapi.dtos.welcome.WelcomeRequest;
import com.jsi1v4.myapi.dtos.welcome.WelcomeResponse;
import com.jsi1v4.myapi.services.WelcomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/welcome")
public class WelcomeController {

    @Autowired
    private WelcomeService welcomeService;

    public WelcomeController() { }

    @GetMapping("")
    public ResponseEntity<WelcomeResponse> getWelcome(@ModelAttribute WelcomeRequest request) {
        WelcomeResponse response = welcomeService.getWelcome(request);

        return ResponseEntity.ok().body(response);
    }
}
