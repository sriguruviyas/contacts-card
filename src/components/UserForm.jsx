import React, { useState, useEffect } from 'react';

/**
 * UserForm Component
 * Controlled form component for taking user input to create or edit contact cards.
 * Features real-time field validation.
 */
export default function UserForm({ onAddUser, editingUser, onCancelEdit }) {
  const AVATARS = ['👨‍💻', '👩‍💻', '👨‍🎨', '👩‍💼', '👨‍🔬', '🚀', '⚡', '🧠'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Web Developer',
    location: '',
    bio: '',
    avatar: '👨‍💻'
  });

  const [errors, setErrors] = useState({});

  // Populate form if editing existing user card
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      resetForm();
    }
  }, [editingUser]);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'Web Developer',
      location: '',
      bio: '',
      avatar: '👨‍💻'
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onAddUser(formData);
    resetForm();
  };

  return (
    <div class="form-panel">
      <h2 class="form-title">
        <span>{editingUser ? '✏️ Edit Contact' : '➕ Create New Contact'}</span>
      </h2>
      <p class="form-subtitle">Fill in details to dynamically add a card to the User List.</p>

      <form onSubmit={handleSubmit} novalidate>
        {/* Full Name */}
        <div class="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sri Guru Viyas RM"
            class={`form-control ${errors.name ? 'has-error' : ''}`}
          />
          {errors.name && <span class="field-error">{errors.name}</span>}
        </div>

        {/* Email Address */}
        <div class="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. sriguruviyas@gmail.com"
            class={`form-control ${errors.email ? 'has-error' : ''}`}
          />
          {errors.email && <span class="field-error">{errors.email}</span>}
        </div>

        {/* Phone Number */}
        <div class="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 9345656964"
            class={`form-control ${errors.phone ? 'has-error' : ''}`}
          />
          {errors.phone && <span class="field-error">{errors.phone}</span>}
        </div>

        {/* Role / Job Title */}
        <div class="form-group">
          <label htmlFor="role">Job Role / Title *</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            class="form-control"
          >
            <option value="Web Developer">Web Developer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Software Student">Software Student</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>

        {/* Location */}
        <div class="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Coimbatore, India"
            class={`form-control ${errors.location ? 'has-error' : ''}`}
          />
          {errors.location && <span class="field-error">{errors.location}</span>}
        </div>

        {/* Bio / Notes */}
        <div class="form-group">
          <label htmlFor="bio">Bio / Notes</label>
          <textarea
            id="bio"
            name="bio"
            rows="2"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Short bio or note..."
            class="form-control"
          ></textarea>
        </div>

        {/* Avatar Selection */}
        <div class="form-group">
          <label>Choose Avatar Icon</label>
          <div class="avatar-picker-grid">
            {AVATARS.map(av => (
              <button
                type="button"
                key={av}
                class={`avatar-option ${formData.avatar === av ? 'selected' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, avatar: av }))}
              >
                {av}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem' }}>
          <button type="submit" class="btn btn-primary">
            {editingUser ? 'Save Changes' : 'Add Contact Card'}
          </button>

          {editingUser && (
            <button type="button" onClick={onCancelEdit} class="btn btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
