package com.jsi1v4.myapi.services;

import com.jsi1v4.myapi.dtos.welcome.WelcomeRequest;
import com.jsi1v4.myapi.dtos.welcome.WelcomeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Arrays;
import java.util.List;

@Service
public class WelcomeService {

    @Autowired
    private RestClient restClient;

    public WelcomeService() { }

    public WelcomeResponse getWelcome(WelcomeRequest request) {
        String sourceResume = restClient.get()
            .uri("https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/topics/resume.md")
            .accept(MediaType.APPLICATION_JSON)
            .retrieve().body(String.class);

        String sourceLinks = restClient.get()
            .uri("https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/topics/links.md")
            .accept(MediaType.APPLICATION_JSON)
            .retrieve().body(String.class);

        String name = "I'm José Paulo (like 'Joseph')...";
        List<String> resume = Arrays.stream(sourceResume.split("\r\n")).toList();
        List<String> links = Arrays.stream(sourceLinks.split("\r\n")).toList();

        return new WelcomeResponse(name, resume, links);
    }
}
