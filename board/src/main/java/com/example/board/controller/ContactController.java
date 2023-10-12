package com.example.board.controller;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.example.board.email.Mailer;
import com.example.board.email.SMTPAuthenticator;
import com.example.board.model.User;

@Controller
public class ContactController {

	@Autowired
	TemplateEngine templateEngine;
	@Autowired
	JavaMailSender mailSender;

	@GetMapping("/contact")
	public String contact() {
		return "contact/contact";
	}

	@PostMapping("/contact")
	public String contact(String email, String subject, String content) throws MessagingException {
		// Mailer mailer = new Mailer();
		// mailer.sendMail(
		// 	"xkzns123@naver.com", // 수신 이메일(관리자)
		// 	"[" + email + "]" + subject, // [작성자 이메일]제목
		// 	content, // 본문
		// 	new SMTPAuthenticator()); // 인증

			Context context = new Context(); //서비스에서 html 파일갑이용하기 위해
			User user = new User();
			context.setVariable("code", 1 );
	

		       String text = this.templateEngine.process("board/D", context);//서비스에서 html 파일갑이용하기 위해2
        MimeMessage mail = this.mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mail, "UTF-8");
        helper.setTo("xkzns123@naver.com");
        helper.setSubject("MR.cold 가입 이메일입니다.");
        helper.setText(text, true);
        this.mailSender.send(mail);

		return "redirect:/contact";
	}
}