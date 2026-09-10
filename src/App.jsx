import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const INITIAL_CONTACTS = [
  {
    id: '1',
    name: 'Sri Guru Viyas',
    company: 'Web Developer',
    phone: '+91 93456 56964',
    email: 'sriguruviyas@gmail.com',
    bio: 'Crafting scalable, high-performance web applications with modern React architecture.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Ananya',
    company: 'UI/UX Designer at BharatTech',
    phone: '+91 98765 43210',
    email: 'ananya@example.in',
    bio: 'Designing intuitive, human-centered UI systems and delightful micro-interactions.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Rohan',
    company: 'Cloud Engineer at Zoho Corp',
    phone: '+91 91234 56789',
    email: 'rohan@example.in',
    bio: 'Building distributed cloud backends, high-throughput microservices, and serverless APIs.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Kavya',
    company: 'Full Stack Developer at Infosys',
    phone: '+91 94455 66778',
    email: 'kavya@example.in',
    bio: 'Specializing in resilient full-stack systems, TypeScript, and reactive frontend patterns.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
  }
];

export default function App() {
  // State for holding contact array
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  // State for search/filter term
  const [searchTerm, setSearchTerm] = useState('');

  // Add new contact to state dynamically without refresh
  const handleAddContact = (newContactData) => {
    const newContact = {
      ...newContactData,
      id: Date.now().toString()
    };
    setContacts(prev => [newContact, ...prev]);
  };

  // Delete contact card from state
  const handleDeleteContact = (id) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  // Real-time filtering based on name or company (case-insensitive partial match)
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
        <div className="badge-pill">🇮🇳 Digital Business Directory</div>
        <h1>Contact Cards Manager</h1>
        <p>Manage, search, and connect with Indian professionals in real-time</p>
      </header>

      <main className="app-main">
        {/* Left Column: Form to Add New Contact */}
        <section className="form-section">
          <ContactForm onAddContact={handleAddContact} />
        </section>

        {/* Right Column: Search + Contact List Display */}
        <section className="display-section">
          <div className="search-bar-wrapper">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search contacts by name, role or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchTerm('')}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="search-meta">
              Showing <strong>{filteredContacts.length}</strong> of <strong>{contacts.length}</strong> contacts
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
