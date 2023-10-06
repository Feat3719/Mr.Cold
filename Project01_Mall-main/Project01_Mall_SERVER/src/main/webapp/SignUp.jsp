<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="java.sql.*" %>

<%

	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // 1. 사용자 입력 받기
    String input_ID = request.getParameter("input_ID");
    String input_PW = request.getParameter("input_PW");
    String input_EMAIL = request.getParameter("input_EMAIL");
    String input_CONTACT = request.getParameter("input_CONTACT");
    String input_ADDRESS = request.getParameter("input_ADDRESS");

    String resultMessage = "";

    // 2. SQLite 연결
    Connection connection = null;
    PreparedStatement checkID = null;
    ResultSet rsID = null;
    
    try {
        Class.forName("org.sqlite.JDBC");
        connection = DriverManager.getConnection("jdbc:sqlite:C:\\Users\\user\\Downloads\\Project01_Mall\\DB\\MEMBER.db");

        // 3. 기존 ID, CONTACT, EMAIL 중복 여부 확인
        checkID = connection.prepareStatement("SELECT * FROM MEMBER WHERE ID = ? OR CONTACT = ? OR EMAIL = ?");
        checkID.setString(1, input_ID);
        checkID.setString(2, input_CONTACT);
        checkID.setString(3, input_EMAIL);
        rsID = checkID.executeQuery();

//         PreparedStatement checkCONTACT = connection.prepareStatement("SELECT * FROM MEMBER WHERE CONTACT = ?");
//         checkCONTACT.setString(1, input_CONTACT);
//         ResultSet rsCONTACT = checkCONTACT.executeQuery();

//         PreparedStatement checkEMAIL = connection.prepareStatement("SELECT * FROM MEMBER WHERE EMAIL = ?");
//         checkEMAIL.setString(1, input_EMAIL);
//         ResultSet rsEMAIL = checkEMAIL.executeQuery();

        if (rsID.next()) {
            resultMessage = "아이디 혹은 이메일, 휴대전화번호가 이미 존재합니다.";
        } else {
            // 4. 중복이 없으면 데이터 삽입
            PreparedStatement insertStatement = connection.prepareStatement("INSERT INTO MEMBER (ID, PW, CONTACT, EMAIL, ADDRESS) VALUES (?, ?, ?, ?, ?)");
            insertStatement.setString(1, input_ID);
            insertStatement.setString(2, input_PW);
            insertStatement.setString(3, input_CONTACT);
            insertStatement.setString(4, input_EMAIL);
            insertStatement.setString(5, input_ADDRESS);
            insertStatement.executeUpdate();
            
            resultMessage = "success";
        }

//         rsID.close();
//         rsCONTACT.close();
//         rsEMAIL.close();
//         checkID.close();
//         checkCONTACT.close();
//         checkEMAIL.close();

    } catch (Exception e) {
        e.printStackTrace();
        resultMessage = "Error: " + e.getMessage();
    } finally {
        try {
            if (rsID != null) rsID.close();
        } catch (SQLException e) { e.printStackTrace(); }
        try {
            if (checkID != null) checkID.close();
        } catch (SQLException e) { e.printStackTrace(); }
        try {
            if (connection != null) connection.close();
        } catch (SQLException e) { e.printStackTrace(); }
    }

    response.setContentType("application/json");
    out.print("{\"message\":\"" + resultMessage + "\"}");
%>