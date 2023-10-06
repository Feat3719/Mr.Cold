package com.example.mrcold.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "MEMBER")
@Data
public class Member {

    @Id
    @Column(name = "ID")
    String ID;

    @Column(name = "PW")
    String PW;

    @Column(name = "CONTACT")
    String CONTACT;

    @Column(name = "EMAIL")
    String EMAIL;

    @Column(name = "ADDRESS")
    String ADDRESS;

}