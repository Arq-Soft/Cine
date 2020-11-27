package com.arquisoft.cine.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import javax.persistence.UniqueConstraint;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "User", 
        uniqueConstraints = @UniqueConstraint(columnNames = {"email"})
        )


public class User {

    @Id
    private int id;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "REGIST_DATE")
    private Date registDate;

    
    private String email;

    private String password;
    private String name;
    private int phone;

    private String lastname;
    private String id_type;
    private String adress;
    private Long date_Birth;

    public int getId() {
        return id;
    }

    public Date getRegistDate() {
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

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getId_type() {
		return id_type;
	}

	public void setId_type(String id_type) {
		this.id_type = id_type;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public Long getDate_Birth() {
		return date_Birth;
	}

	public void setDate_Birth(Long date_Birth) {
		this.date_Birth = date_Birth;
	}



}
