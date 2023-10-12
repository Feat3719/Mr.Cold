package com.example.board.utill;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.print.DocFlavor.STRING;

import org.springframework.stereotype.Component;


@Component
public class Encrypt {
    
    public String encode(String raw){
         String hex= null;
        try {
            // String raw = "password1234";
            // String rawAndSalt = "abcd1234";
            MessageDigest md;
            md = MessageDigest.getInstance("SHA-256");

            md.update(raw.getBytes());
             hex = String.format("%064x", new BigInteger(1, md.digest()));
            System.out.println("raw의 해시값 : "+hex);
            // md.update(rawAndSalt.getBytes());
            // hex = String.format("%064x", new BigInteger(1, md.digest()));
            // System.out.println("raw+salt의 해시값 : "+hex);

            return hex;

        } catch (NoSuchAlgorithmException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return hex;
        }

    
    
    }
}
