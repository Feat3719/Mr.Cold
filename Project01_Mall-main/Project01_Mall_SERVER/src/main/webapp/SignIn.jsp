<%@ page language="java" contentType="application/json; charset=utf-8"
    pageEncoding="utf-8"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.ResultSet" %>
<%

	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type");
	
    // 사용자 입력 받기
    String userID = request.getParameter("ID");
    String userPW = request.getParameter("PW");


	String ID_value = null;
    // SQLite 연결
    Connection connection = null;
    try {
        Class.forName("org.sqlite.JDBC");
        connection = DriverManager.getConnection("jdbc:sqlite:C:\\Users\\user\\Downloads\\Project01_Mall\\DB\\MEMBER.db");

        PreparedStatement statement = connection.prepareStatement("SELECT * FROM MEMBER WHERE ID = ? AND PW = ?");
        statement.setString(1, userID);
        statement.setString(2, userPW);

        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
        	ID_value = userID;
        	out.print("{\"ID_value\":" + ID_value + "}");
        	
        }

        rs.close();
        statement.close();
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        try {
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            
        }
    }

    response.setContentType("application/json");
    /* out.print("{\"isLoggedIn\":" + isLoggedIn + "}"); */
/*     out.print("{\"user\": {\"user_id\":" + userID + "}}");
    out.print("{\"user_id\":" + userID + "}");
    out.print("{\"user\": {\"user_id\":" + userID + "}, \"user_id\":" + userID + "}");
     */
    
%>

    
