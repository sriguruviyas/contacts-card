import React, { useState } from 'react';

export default function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    bio: '',
    avatar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    onAddContact(formData);

    // Reset form after submit
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      bio: '',
      avatar: ''
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Add New Contact</h2>

      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Jane Doe"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Job Title / Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Senior Developer at TechCorp"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +1 (555) 000-1234"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. jane@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="avatar">Avatar Image URL (Optional)</label>
        <input
          type="url"
          id="avatar"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          placeholder="https://example.com/avatar.jpg"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bio">Short Bio / Description</label>
        <textarea
          id="bio"
          name="bio"
          rows="3"
          value={formData.bio}
          onChange={handleChange}
          placeholder="A short note or background..."
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Add Contact Card
      </button>
    </form>
  );
}
