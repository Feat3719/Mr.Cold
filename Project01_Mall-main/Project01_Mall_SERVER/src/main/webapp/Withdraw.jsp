<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>

<%
    String userID = request.getParameter("ID"); // 주소창의 ID 파라미터 값을 가져옵니다.
    boolean success = false; 
    String message = "";

    if(userID != null && !userID.isEmpty()) {
        try {
            Class.forName("org.sqlite.JDBC");
            Connection conn = DriverManager.getConnection("jdbc:sqlite:C:\\Users\\user\\Desktop\\Project_Sprint\\Internet_Shoppingmall\\DB\\MEMBER.db");
            PreparedStatement ps = conn.prepareStatement("DELETE FROM members WHERE ID = ?");
            ps.setString(1, userID);
            
            int result = ps.executeUpdate();
            if (result > 0) {
                success = true;
                message = "정상적으로 탈퇴되었습니다.";
            } else {
                message = "해당 사용자를 찾을 수 없습니다.";
            }
            ps.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
            message = "탈퇴 과정에서 오류가 발생했습니다.";
        }
    } else {
        message = "잘못된 요청입니다.";
    }

    response.setContentType("application/json");
    out.print("{ \"success\": " + success + ", \"message\": \"" + message + "\" }");
%>