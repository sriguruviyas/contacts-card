import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const SearchIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const INITIAL_CONTACTS = [
  {
    id: '1',
    name: 'Sri Guru Viyas',
    company: 'Web Developer',
    phone: '+91 93456 56964',
    email: 'sriguruviyas@gmail.com',
    bio: 'Passionate web developer building clean web apps and thoughtful user experiences',
    github: 'https://github.com/sriguruviyas'
  },
  {
    id: '2',
    name: 'Ananya',
    company: 'Product Designer at BharatTech',
    phone: '+91 98765 43210',
    email: 'ananya@example.in',
    bio: 'Focused on creating thoughtful visual systems and making software feel effortless',
    github: ''
  },
  {
    id: '3',
    name: 'Rohan',
    company: 'Cloud Engineer at Zoho',
    phone: '+91 91234 56789',
    email: 'rohan@example.in',
    bio: 'Specializes in scalable backend services and automating infrastructure',
    github: ''
  },
  {
    id: '4',
    name: 'Kavya',
    company: 'Frontend Engineer at Infosys',
    phone: '+91 94455 66778',
    email: 'kavya@example.in',
    bio: 'Enjoys turning design concepts into fast accessible and responsive web experiences',
    github: ''
  }
];

export default function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = (newContactData) => {
    const newContact = {
      ...newContactData,
      id: Date.now().toString()
    };
    setContacts(prev => [newContact, ...prev]);
  };

  const handleDeleteContact = (id) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  const filteredContacts = contacts.filter((contact) => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return true;

    const nameMatches = contact.name.toLowerCase().includes(query);
    const companyMatches = (contact.company || '').toLowerCase().includes(query);

    return nameMatches || companyMatches;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-top-bar">
          <span className="directory-badge">Directory</span>
          <a
            href="https://github.com/sriguruviyas/contacts-card"
            target="_blank"
            rel="noreferrer"
            className="github-repo-link"
          >
            <GithubIcon />
            <span>sriguruviyas/contacts-card</span>
          </a>
        </div>

        <h1>Contact Cards Manager</h1>
        <p>A simple space to store organize and discover professional contacts</p>
      </header>

      <main className="app-main">
        <section className="form-section">
          <ContactForm onAddContact={handleAddContact} />
        </section>

        <section className="display-section">
          <div className="search-bar-wrapper">
            <div className="search-bar">
              <span className="search-icon"><SearchIcon /></span>
              <input
                type="text"
                className="search-input"
                placeholder="Search by name, role or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchTerm('')}
                  title="Clear search"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="search-meta">
              Showing {filteredContacts.length} of {contacts.length} cards
            </div>
          </div>

          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </section>
      </main>
    </div>
  );
}
