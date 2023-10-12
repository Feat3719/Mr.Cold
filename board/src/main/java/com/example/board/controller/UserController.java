package com.example.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

import com.example.board.config.SecurityConfig;
import com.example.board.model.User;
import com.example.board.repository.UserRepository;

@Controller
public class UserController {
	@Autowired
	UserRepository userRepository;


	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	HttpSession session;
	
	@GetMapping("/signin")
	public String signin() {
		return "signin";
	}
	
	@PostMapping("/signin")
	public String signinPost(@ModelAttribute User user) {
		user.getPwd();

		User findUser = userRepository.findByEmail(user.getEmail());
		if (findUser!=null){
			if	(passwordEncoder.matches(user.getPwd(), findUser.getPwd())) {
							session.setAttribute("user_info", findUser);

			}

		}

		return "redirect:/";
	}

	@GetMapping("/signout")
	public String signout() {
		session.invalidate();
		return "redirect:/";
	}
	
	@GetMapping("/signup") 
	public String signup() {
		return "signup";
	}

	@PostMapping("/signup")
	public String signupPost(@ModelAttribute User user) {
		String userPwd = user.getPwd();
		String encodePwd = passwordEncoder.encode(userPwd);
		user.setPwd(encodePwd);
		userRepository.save(user);
		return "redirect:/";
	}
}