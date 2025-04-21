package com.jsi1v4.myapi.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {

    public HomeController() { }

    @GetMapping("")
    public String home() {
        return "redirect:/index.html";
    }
}
