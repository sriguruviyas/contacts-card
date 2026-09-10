import React from 'react';

export default function ContactCard({ contact, onDeleteContact }) {
  // Get initial letters for avatar placeholder if no URL provided
  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="contact-card">
      <div className="card-header">
        {contact.avatar ? (
          <img
            src={contact.avatar}
            alt={contact.name}
            className="avatar-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="avatar-placeholder"
          style={{ display: contact.avatar ? 'none' : 'flex' }}
        >
          {getInitials(contact.name)}
        </div>

        <div className="header-info">
          <h3 className="contact-name">{contact.name}</h3>
          {contact.company && <p className="contact-company">{contact.company}</p>}
        </div>

        {onDeleteContact && (
          <button
            className="delete-btn"
            onClick={() => onDeleteContact(contact.id)}
            title="Delete Contact"
          >
            ×
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
            <p>{contact.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
}
