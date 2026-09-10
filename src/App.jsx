import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const INITIAL_CONTACTS = [
  {
    id: '1',
    name: 'Sri Guru Viyas',
    company: 'Frontend Engineer at TechCorp',
    phone: '+91 9345656964',
    email: 'sriguruviyas@gmail.com',
    bio: 'Specializing in clean component architectures and modern React SPAs.',
    avatar: ''
  },
  {
    id: '2',
    name: 'Alex Johnson',
    company: 'Product Designer at DesignCo',
    phone: '+1 (555) 234-5678',
    email: 'alex.j@designco.io',
    bio: 'Creating intuitive UI/UX systems and responsive component libraries.',
    avatar: ''
  },
  {
    id: '3',
    name: 'Sarah Williams',
    company: 'Full Stack Engineer at CloudApp',
    phone: '+1 (555) 876-5432',
    email: 'sarah@cloudapp.dev',
    bio: 'Passionate about REST APIs, web performance, and state management.',
    avatar: ''
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
    const companyMatches = contact.company.toLowerCase().includes(query);

    return nameMatches || companyMatches;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Contact Cards Manager</h1>
        <p>Manage digital contact and business cards in real-time</p>
      </header>

      <main className="app-main">
        {/* Left Column: Form to Add New Contact */}
        <section className="form-section">
          <ContactForm onAddContact={handleAddContact} />
        </section>

        {/* Right Column: Search + Contact List Display */}
        <section className="display-section">
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search contacts by name or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
