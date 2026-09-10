import React, { useState } from 'react';

const UserPlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="8.5" cy="7" r="4"/>
    <line x1="20" y1="8" x2="20" y2="14"/>
    <line x1="23" y1="11" x2="17" y2="11"/>
  </svg>
);

export default function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    bio: '',
    github: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    onAddContact(formData);

    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      bio: '',
      github: ''
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <span className="form-icon"><UserPlusIcon /></span>
        <h2>Add New Contact</h2>
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Sri Guru Viyas"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Role and Organization</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Web Developer at TechCorp"
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
          placeholder="+91 93456 56964"
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
          placeholder="sriguruviyas@gmail.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="github">GitHub Profile Link (Optional)</label>
        <input
          type="url"
          id="github"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="https://github.com/sriguruviyas"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bio">About / Note</label>
        <textarea
          id="bio"
          name="bio"
          rows="3"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Share a short note about this person"
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Save Contact Card
      </button>
    </form>
  );
}
