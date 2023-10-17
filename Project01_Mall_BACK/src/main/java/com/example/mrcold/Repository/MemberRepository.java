package com.example.mrcold.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mrcold.Entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByIDAndPW(String ID, String PW);
    Member findByID(String ID);
    Member findByCONTACT(String CONTACT);
    Member findByEMAIL(String EMAIL);
    Member findByNAME(String NAME);
}