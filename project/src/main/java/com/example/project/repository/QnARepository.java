package com.example.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.entity.QnA;

public interface QnARepository extends JpaRepository<QnA, Integer>{
    
}
