"use client" 
// import axios from 'axios';
// import styles from "./../page.module.css"
import React,{ FormEvent, useState } from 'react';
import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const res: LoginResponse = await login('credentials', { 
        redirect: false, 
        email: formData.email, 
        password: formData.password 
      });
      if (!res?.error) {
        alert('Login successful');
        router.push('/')

      } else {
        alert('Login failed: ' + res.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        required
        fullWidth
      />
      <TextField
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}

async function login(arg0: string, arg1: { redirect: boolean; email: string; password: string; }): Promise<LoginResponse> {
  
  return new Promise((resolve) => {
    setTimeout(() => {
     
      resolve({}); 
    }, 1000);
  });
}