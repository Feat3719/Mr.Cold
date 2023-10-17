package com.example.mrcold.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = "qna")
public class Comment {

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false, length = 100)
    String content;
    
    String writer;
    private Date createdDate;

    private Date modifiedDate;

    @ManyToOne
    @JsonIgnore
    QnA qna;

    
   
    
}
