"use client" 
import axios from 'axios';
import styles from "./../page.module.css"
import React,{ useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Submitting form:', formData);  // ตรวจสอบค่าก่อนส่ง
      const response = await axios.post('/api/login', formData);
  
      if (response.status === 200) {
        // ถ้าการเข้าสู่ระบบสำเร็จ ให้เก็บ token
        localStorage.setItem('authToken', response.data.token); 
        alert('Login successful');
      } else {
        console.error('Login failed:', response.data);
        alert('Invalid login');
      }
    } catch (error: any) {
      console.error('Error during login:', error?.response?.data || error.message); // เพิ่มการตรวจสอบข้อผิดพลาด
      alert(error?.response?.data?.message || 'Error during login');
    }
    
  };

  return (
    <div className={styles.formContainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}