import React from 'react';

// Generates consistent pleasant gradient backgrounds based on name
const GRADIENTS = [
  'linear-gradient(135deg, #6366f1, #a855f7)',
  'linear-gradient(135deg, #3b82f6, #06b6d4)',
  'linear-gradient(135deg, #f59e0b, #ef4444)',
  'linear-gradient(135deg, #10b981, #059669)',
  'linear-gradient(135deg, #ec4899, #8b5cf6)',
  'linear-gradient(135deg, #0ea5e9, #6366f1)'
];

const getGradientForName = (name = '') => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % GRADIENTS.length;
  return GRADIENTS[index];
};

export default function ContactCard({ contact, onDeleteContact }) {
  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const gradientBg = getGradientForName(contact.name);

  return (
    <div className="contact-card">
      <div className="card-top-accent" style={{ background: gradientBg }}></div>
      
      <div className="card-header">
        <div className="avatar-container">
          {contact.avatar ? (
            <img
              src={contact.avatar}
              alt={contact.name}
              className="avatar-img"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <div
            className="avatar-placeholder"
            style={{
              background: gradientBg,
              display: contact.avatar ? 'none' : 'flex'
            }}
          >
            {getInitials(contact.name)}
          </div>
        </div>

        <div className="header-info">
          <h3 className="contact-name">{contact.name}</h3>
          {contact.company && (
            <span className="contact-company-badge">{contact.company}</span>
          )}
        </div>

        {onDeleteContact && (
          <button
            className="delete-btn"
            onClick={() => onDeleteContact(contact.id)}
            title="Delete Contact"
          >
            🗑️
          </button>
        )}
      </div>

      <div className="card-body">
        {contact.phone && (
          <div className="contact-field">
            <span className="field-icon">📞</span>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
        )}

        {contact.email && (
          <div className="contact-field">
            <span className="field-icon">✉️</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        )}

        {contact.bio && (
          <div className="contact-bio">
            <p>"{contact.bio}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
