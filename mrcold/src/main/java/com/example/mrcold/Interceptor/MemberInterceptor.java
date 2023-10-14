package com.example.mrcold.Interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.example.mrcold.Entity.Member;
import com.example.mrcold.Repository.MemberRepository;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class MemberInterceptor implements HandlerInterceptor {
    @Autowired
    private MemberRepository memberRepository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        
        String AuthID = request.getHeader("AuthID");
        String AuthPW = request.getHeader("AuthPW");
        String url = request.getRequestURI();
        System.out.println(url);
        System.out.println(AuthID);
         
        if (AuthID != null) {
            Member dbID = memberRepository.findByID(AuthID);
            
            if (AuthID.equals(dbID.getID())) {
                 // 1. 회원인 경우 //
                if (url.equals("/SignUp")) {
                    response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
                    return false;
                }
                if (url.equals("/SignIn")) {
                    response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
                    return false;
                }
                // if (url.equals("/IdFind")) {
                //     response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
                //     return false;
                // }
                // if (url.equals("/PwFind")) {
                //     response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
                //     return false;
                // }
                if (url.equals("/EditMemberInfo_getDt")) {
                    if(AuthPW == null){
                        response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
                        return false;
                    } else return true;
                }
                
            } else {
                // 2. 클라이언트에 session 값은 있지만 DB에 없는 경우 = 고의해킹
                return false;
            }
        } else { 
            // 3. 비회원인경우
            if (url.equals("/EditMemberInfo_getDt")) {
                response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
                return false;
            }
            // if (url.equals("/PwFind_revise")) {
            //     return false;
            // }
            // if (url.equals("/EditMemberInfoAuth")) {
            //     response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
            //     return false;
            // }
            // if (url.equals("/EditMemberInfo_getDt")) {
            //     return false;
            // }

            return true;
        }
 

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        log.debug("postHandle");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        log.debug("afterCompletion");
    }
}
