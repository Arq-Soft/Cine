package com.arquisoft.cine.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "User")


public class User {

    @Id
    @GeneratedValue
    private int id;
    
    @Column(name = "REGIST_DATE", updatable = false, nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp registDate;

    private String email;
    private String password;
    private String name;
    private int phone;

    public int getId() {
        return id;
    }

    public Timestamp getRegistDate() {
        return registDate;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }


}
