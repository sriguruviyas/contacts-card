import React from 'react';
import ContactCard from './ContactCard';

export default function ContactList({ contacts, onDeleteContact }) {
  if (!contacts || contacts.length === 0) {
    return (
      <div className="empty-list">
        <p>No contact cards found.</p>
      </div>
    );
  }

  return (
    <div className="contact-list-grid">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
}
