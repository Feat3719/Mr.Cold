package com.example.mrcold.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mrcold.Entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByIDAndPW(String ID, String PW);
    Optional<Member> findByID(String ID);
    Optional<Member> findByCONTACT(String CONTACT);
    Optional<Member> findByEMAIL(String EMAIL);
}