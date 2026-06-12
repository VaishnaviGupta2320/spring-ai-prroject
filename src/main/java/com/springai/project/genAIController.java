package com.springai.project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class genAIController {

    ChatService chatService;

    public genAIController(ChatService chatService)
    {
        this.chatService=chatService;
    }

    @GetMapping("ask-ai")
    public String getResponse(@RequestParam String prompt)
    {
        return chatService.getResponse(prompt);
    }
}
