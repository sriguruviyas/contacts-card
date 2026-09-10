import React from 'react';

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const GRADIENTS = [
  'linear-gradient(135deg, #4f46e5, #7c3aed)',
  'linear-gradient(135deg, #2563eb, #0284c7)',
  'linear-gradient(135deg, #0d9488, #059669)',
  'linear-gradient(135deg, #d97706, #dc2626)',
  'linear-gradient(135deg, #db2777, #7c3aed)'
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
            title="Remove contact"
            aria-label="Remove contact"
          >
            <TrashIcon />
          </button>
        )}
      </div>

      <div className="card-body">
        {contact.phone && (
          <div className="contact-field">
            <span className="field-icon"><PhoneIcon /></span>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
        )}

        {contact.email && (
          <div className="contact-field">
            <span className="field-icon"><MailIcon /></span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        )}

        {contact.github && (
          <div className="contact-field">
            <span className="field-icon"><GithubIcon /></span>
            <a href={contact.github} target="_blank" rel="noreferrer">
              github.com/{contact.github.replace('https://github.com/', '')}
            </a>
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
