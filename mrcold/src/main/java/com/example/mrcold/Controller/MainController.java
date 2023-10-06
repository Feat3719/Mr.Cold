package com.example.mrcold.Controller;

import java.util.HashMap;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mrcold.Entity.Member;
import com.example.mrcold.Repository.MemberRepository;

@Controller
public class MainController {

    @Autowired
    MemberRepository memberRepository;

    @RequestMapping("/")
    public String main() {
        return "main";
    }

    @PostMapping("/SignIn")
    public ResponseEntity<Map<String, Object>> signInPost(@RequestBody Map<String, String> credentials) {
        String ID = credentials.get("ID");
        String PW = credentials.get("PW");

        Optional<Member> member = memberRepository.findByIDAndPW(ID, PW);
        // System.out.println("ID: " + ID + ", PW: " + PW);
        Map<String, Object> response = new HashMap<>();
        // System.out.println(member);
        if (member.isPresent()) {
            response.put("success", true);
        } else {
            response.put("success", false);
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping("/SignUp")
    @ResponseBody
    public Map<String, Object> signUp(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();
        
        Optional<Member> idIsPresent = memberRepository.findByID(inputData.get("ID"));
        Optional<Member> contactIsPresent = memberRepository.findByCONTACT(inputData.get("CONTACT"));
        Optional<Member> emailIsPresent = memberRepository.findByEMAIL(inputData.get("EMAIL"));

        System.out.println(inputData);

        if (idIsPresent.isPresent()) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 아이디입니다.");
            System.out.println(response);
            return response;
        }
        if (contactIsPresent.isPresent()) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 연락처입니다.");
            return response;
        }
        if (emailIsPresent.isPresent()) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 이메일입니다.");
            return response;
        }
        

        try {
            
            Member member = new Member();
            member.setID(inputData.get("ID"));
            member.setPW(inputData.get("PW"));
            member.setCONTACT(inputData.get("CONTACT"));
            member.setEMAIL(inputData.get("EMAIL"));
            member.setADDRESS(inputData.get("ADDRESS"));
            memberRepository.save(member);

            response.put("success", true);
            response.put("successMessage", "회원가입에 성공하셨습니다!");
            return response;
        } catch (Exception e) {
            response.put("error", "회원 가입 중 오류가 발생하였습니다.");
            return response;
        }
    }

    @PostMapping("/EditMemberInfo")
    @ResponseBody
    public Map<String, Object> EditMemberInfo(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();
        
        Optional<Member> contactIsPresent = memberRepository.findByCONTACT(inputData.get("CONTACT"));
        Optional<Member> emailIsPresent = memberRepository.findByEMAIL(inputData.get("EMAIL"));

        System.out.println(inputData);

        if (contactIsPresent.isPresent()) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 연락처입니다.");
            return response;
        }
        if (emailIsPresent.isPresent()) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 이메일입니다.");
            return response;
        }
        try {
            Member member = new Member();
            member.setID(inputData.get("ID"));
            member.setPW(inputData.get("PW"));
            member.setCONTACT(inputData.get("CONTACT"));
            member.setEMAIL(inputData.get("EMAIL"));
            member.setADDRESS(inputData.get("ADDRESS"));
            memberRepository.save(member);
            response.put("success", true);
            response.put("successMessage", "개인정보수정 성공");
            return response;
        } catch (Exception e) {
            response.put("error", "개인정보수정 중 오류가 발생하였습니다.");
            return response;
        }
    }
}
