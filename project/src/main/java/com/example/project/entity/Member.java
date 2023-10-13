package com.example.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = "pw")
public class Member {

    @Id
    @Column( length = 10, nullable = false)
    String id;

    @Column( length = 20, nullable = false)
    @JsonIgnore
    String pw;

    @Column( length = 14, nullable = false, unique = true)
    @JsonIgnore
    String contact;

    @Column( length = 30, nullable = false, unique = true)
    @JsonIgnore
    String email;

    @Column( length = 100, nullable = false)
    @JsonIgnore
    String address;

}