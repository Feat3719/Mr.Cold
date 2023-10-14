package com.example.mrcold.Controller;

import java.util.HashMap;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.mrcold.Entity.Member;
import com.example.mrcold.Repository.MemberRepository;

@Controller
public class MyPageController {

    @Autowired
    MemberRepository memberRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    HttpSession session;

    @RequestMapping("/")
    public String main() {
        return "main";
    }

    @PostMapping("/SignIn")
    @ResponseBody
    public Map<String, Object> signInPost(@RequestBody Map<String, String> inputdata ) {
        String ID = inputdata.get("ID");
        String PW = inputdata.get("PW");
        // String SignedIn = inputdata.get("SignedIn");     
        
        Member member = memberRepository.findByID(ID);
        Map<String, Object> response = new HashMap<>();
        // System.out.println(member);
        if (member != null) {
            if (passwordEncoder.matches(PW, member.getPW())) {
                session.setAttribute("id", ID);
                System.out.println(session.getAttribute("id"));
                response.put("signin_postkey", 1);
                response.put("Message", ID + " 님 환영합니다.");
            } else {
                response.put("signin_postkey", 2);
                response.put("Message", "비밀번호를 다시 확인해주세요.");
            }
        } else {
            response.put("signin_postkey", 3);
            response.put("Message", "아이디를 다시 확인해주세요.");
        }

        return response;
    }

    @PostMapping("/SignUp")
    @ResponseBody
    public Map<String, Object> signUp(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();

        Member idIsPresent = memberRepository.findByID(inputData.get("ID"));
        Member contactIsPresent = memberRepository.findByCONTACT(inputData.get("CONTACT"));
        Member emailIsPresent = memberRepository.findByEMAIL(inputData.get("EMAIL"));

        System.out.println(inputData);

        if (idIsPresent!=null) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 아이디입니다.");
            return response;
        }
        if (contactIsPresent!=null) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 연락처입니다.");
            return response;
        }
        if (emailIsPresent!=null) {
            response.put("success", false);
            response.put("errorMessage", "이미 사용중인 이메일입니다.");
            return response;
        }

        try {

            Member member = new Member();
            member.setID(inputData.get("ID"));
            member.setNAME(inputData.get("NAME"));
            member.setCONTACT(inputData.get("CONTACT"));
            member.setEMAIL(inputData.get("EMAIL"));
            member.setADDRESS(inputData.get("ADDRESS"));

            String encodedPassword = passwordEncoder.encode(inputData.get("PW"));
            member.setPW(encodedPassword);

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

        // Member contactIsPresent = memberRepository.findByCONTACT(inputData.get("CONTACT"));
        // Member emailIsPresent = memberRepository.findByEMAIL(inputData.get("EMAIL"));

        // if (contactIsPresent!=null) {
        //     response.put("success", false);
        //     response.put("errorMessage", "이미 사용중인 연락처입니다.");
        //     return response;
        // }
        // if (emailIsPresent!=null) {
        //     response.put("success", false);
        //     response.put("errorMessage", "이미 사용중인 이메일입니다.");
        //     return response;
        // }
        try {
            Member member = new Member();
            member.setID(inputData.get("ID"));
            member.setNAME(inputData.get("NAME"));
            member.setCONTACT(inputData.get("CONTACT"));
            member.setEMAIL(inputData.get("EMAIL"));
            member.setADDRESS(inputData.get("ADDRESS"));

            String encodedPassword = passwordEncoder.encode(inputData.get("PW"));
            member.setPW(encodedPassword);

            memberRepository.save(member);
            response.put("success", true);
            response.put("successMessage", "개인정보를 성공적으로 수정하였습니다.");
            return response;
        } catch (Exception e) {
            response.put("error", "개인정보수정 중 오류가 발생하였습니다.");
            return response;
        }
    }
    @PostMapping("/EditMemberInfo_getDt")
    @ResponseBody
    public Map<String, Object> EditMemberInfo_getDt(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();

        Member data_Id = memberRepository.findByID(inputData.get("ID"));
        try {
            if(data_Id.getID().equals(inputData.get("ID"))) {
                response.put("key", 1);
                response.put("NAME", data_Id.getNAME());
                response.put("CONTACT", data_Id.getCONTACT());
                response.put("EMAIL", data_Id.getEMAIL());
                response.put("ADDRESS", data_Id.getADDRESS());
    
                return response;
            } else {
                response.put("key", 2);
                return response;
            }
        } catch (Exception e) {
            response.put("key", 3);         
        }
        return response;
    }

    @PostMapping("/EditMemberInfoAuth")
    @ResponseBody
    public Map<String, Object> EditMemberInfoAuth(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();

        Member postedData = memberRepository.findByID(inputData.get("ID"));

        if (passwordEncoder.matches(inputData.get("PW"), postedData.getPW())) {
            response.put("moveToEditInfo", true);
            return response;
        } else {
            response.put("moveToEditInfo", false);
            response.put("Message", "비밀번호가 틀렸습니다.");
            return response;
        }

    }
    @PostMapping("/IdFind")
    @ResponseBody
    public Map<String, Object> IdFind(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();

        Member dbdata = memberRepository.findByEMAIL(inputData.get("EMAIL"));
        // String asdf = (String) session.getAttribute("id");
        // System.out.println(asdf);
        try {
            if(dbdata.getEMAIL() != null) {
                if (dbdata.getNAME().equals(inputData.get("NAME"))) {
                    response.put("key", 1);
                    response.put("dataName", dbdata.getNAME());
                    response.put("dataId", dbdata.getID());
                    
                    return response;
                } else {
                    response.put("key", 2);
                    return response;
                }
            } else {
                response.put("key", 3);
                return response;
            }
        } catch (Exception e) {
            response.put("key", 4);
            return response;
        }
    }

    @PostMapping("/PwFind")
    @ResponseBody
    public Map<String, Object> PwFind(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();

        Member data_Id = memberRepository.findByID(inputData.get("ID"));

        try {
            if(data_Id != null) {

                if(data_Id.getEMAIL().equals(inputData.get("EMAIL"))) {
                    response.put("success", true);
                    return response;
                } else {
                    response.put("success", false);
                    return response; 
                }
            } else {
                response.put("success", false);
                return response;
            }

        } catch (Exception e) {
            response.put("Message", "회원정보 검색중 오류가 발생하였습니다.");
            return response;
        }
    }
    @PostMapping("/PwFind_revise")
    @ResponseBody
    public Map<String, Object> PwFind_Revise(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();

        Member dataId = memberRepository.findByID(inputData.get("ID"));

        try {
            if(dataId != null) {
                dataId.setPW(passwordEncoder.encode(inputData.get("PW")));
                memberRepository.save(dataId);
                response.put("key", 1);
                System.out.println("3");
                return response;
            } else {
                System.out.println("4");
                response.put("key" , 2);
                return response;
            }
        } catch (Exception e) {
            System.out.println("5");
             response.put("key" , 3);
            return response;

        }
    }
    
    @PostMapping("/Withdraw")
    @ResponseBody
    public Map<String, Object> Withdraw(@RequestBody Map<String, String> inputData) {
        Map<String, Object> response = new HashMap<>();

        Member dbdata = memberRepository.findByID(inputData.get("ID"));
        try {
            System.out.println(dbdata.getID());
            if(dbdata.getID() != null){
                memberRepository.delete(dbdata); 
                response.put("key", 1);
                return response;
            } else {
                System.out.println("4");
                response.put("key", 2);
                return response;
            }
        } catch (Exception e) {
            response.put("key" , 3);
            return response;

        }
    }
}
