package com.example.mrcold.Entity;



import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class QnA {
    
    @Id
    @GeneratedValue
    int id;

    @Column( nullable = false, length = 10)
    String subject;

    @Column(nullable = false, length = 100)
    String title;

    @Column( nullable = false, length = 1000)
    String content;

    private Date createdDate;

    private Date modifiedDate;

    @ManyToOne
    Member member;

    @OneToMany(mappedBy = "qna")
    // @JsonIgnore
    List<Comment> comments = new ArrayList<>();
}
