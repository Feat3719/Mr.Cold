package com.example.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project.entity.Member;


public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByIdAndPw(String id, String pw);
    Optional<Member> findById(String id);
    Optional<Member> findByContact(String contact);
    Optional<Member> findByEmail(String email);
}