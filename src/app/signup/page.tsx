"use client";
import { useState } from 'react';
import axios from 'axios';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Update the endpoint path to match the correct location
      const response = await axios.post('/api/signup', formData);
      
      if (response.status === 201) {
        alert('Signup successful');
      }
    } catch (error) {
      alert('Signup failed');
      console.error('Error during signup:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password"
        required
      />
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        placeholder="Last Name"
        required
      />
      <input
        type="tel"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}