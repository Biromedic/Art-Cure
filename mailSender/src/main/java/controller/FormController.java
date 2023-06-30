package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import service.EmailService;

@Controller
public class FormController {
    private EmailService emailService;

    @Autowired
    public FormController(EmailService emailService){
        this.emailService = emailService;
    }

    @GetMapping("/")
    public String showForm(){
        return "form";
    }

    @GetMapping("/submit")
    public String submitForm(@RequestParam("FullName") String fullName, @RequestParam("Subject") String subject, @RequestParam("email") String email, @RequestParam("phone") String phone){

        try {
            emailService.sendEmail(email,subject,fullName,phone);
            return "success";
        }catch (Exception e){
            return "error";
        }

    }
}

