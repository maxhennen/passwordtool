package com.example.passwordtool.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Password {
    @Id
    @GeneratedValue
    private long id;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "password", nullable = false)
    private String password;

    public Password() {
    }

    public Password(String content, String password) {
        this.content = content;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
