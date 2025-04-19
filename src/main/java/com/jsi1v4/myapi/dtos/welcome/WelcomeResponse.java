package com.jsi1v4.myapi.dtos.welcome;

import java.util.List;

public class WelcomeResponse {
    private String name;
    private List<String> resume;
    private List<String> links;

    public WelcomeResponse(String name, List<String> resume, List<String> links) {
        this.name = name;
        this.resume = resume;
        this.links = links;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getResume() {
        return resume;
    }

    public void setResume(List<String> resume) {
        this.resume = resume;
    }

    public List<String> getLinks() {
        return links;
    }

    public void setLinks(List<String> links) {
        this.links = links;
    }
}
