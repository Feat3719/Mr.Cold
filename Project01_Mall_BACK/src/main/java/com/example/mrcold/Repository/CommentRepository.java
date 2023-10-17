package com.example.mrcold.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mrcold.Entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer>{
    
}
