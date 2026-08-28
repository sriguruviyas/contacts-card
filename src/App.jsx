import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import StatsSummary from './components/StatsSummary.jsx';
import UserForm from './components/UserForm.jsx';
import UserList from './components/UserList.jsx';
import SearchBar from './components/SearchBar.jsx';
import Notification from './components/Notification.jsx';

// Initial pre-populated sample contacts for evaluator review
const INITIAL_CONTACTS = [
  {
    id: 'contact_1',
    name: 'Sri Guru Viyas RM',
    email: 'sriguruviyas@gmail.com',
    phone: '+91 9345656964',
    role: 'Web Developer',
    location: 'Coimbatore, India',
    bio: 'B.Tech IT student specializing in modern web applications & frontend React architecture.',
    avatar: '👨‍💻',
    isFavorite: true
  },
  {
    id: 'contact_2',
    name: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 9876543210',
    role: 'UI/UX Designer',
    location: 'Bengaluru, India',
    bio: 'Passionate about clean component interfaces and accessible visual design systems.',
    avatar: '👩‍🎨',
    isFavorite: false
  },
  {
    id: 'contact_3',
    name: 'Rohan Verma',
    email: 'rohan.v@example.com',
    phone: '+91 9123456789',
    role: 'Full Stack Developer',
    location: 'Chennai, India',
    bio: 'Node.js and React specialist focusing on API integration and state persistence.',
    avatar: '🚀',
    isFavorite: true
  }
];

export default function App() {
  // 1. Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('react_cards_theme') || 'dark';
  });

  // 2. Contacts State synchronized with localStorage
  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem('react_contact_cards_data');
      return saved ? JSON.parse(saved) : INITIAL_CONTACTS;
    } catch (e) {
      console.error('Failed to load contacts from local storage:', e);
      return INITIAL_CONTACTS;
    }
  });

  // 3. Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('ALL');

  // 4. Editing User State
  const [editingUser, setEditingUser] = useState(null);

  // 5. Notification Toast State
  const [notification, setNotification] = useState('');

  // Synchronize theme with document tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('react_cards_theme', theme);
  }, [theme]);

  // Synchronize contacts state with localStorage
  useEffect(() => {
    localStorage.setItem('react_contact_cards_data', JSON.stringify(contacts));
  }, [contacts]);

  // Handler: Toggle Theme
  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Handler: Add or Update Contact
  const handleSaveUser = (userData) => {
    if (editingUser) {
      // Update existing contact card
      setContacts(prev => prev.map(item => (item.id === editingUser.id ? { ...userData, id: editingUser.id } : item)));
      setEditingUser(null);
      showToast(`Updated contact details for ${userData.name}`);
    } else {
      // Create new contact card dynamically
      const newCard = {
        ...userData,
        id: 'card_' + Date.now(),
        isFavorite: false
      };
      setContacts(prev => [newCard, ...prev]);
      showToast(`Added ${userData.name} to User List!`);
    }
  };

  // Handler: Delete Contact Card
  const handleDeleteUser = (id) => {
    const target = contacts.find(c => c.id === id);
    if (confirm(`Are you sure you want to delete ${target ? target.name : 'this contact'}?`)) {
      setContacts(prev => prev.filter(c => c.id !== id));
      if (editingUser && editingUser.id === id) {
        setEditingUser(null);
      }
      showToast('Contact card removed.');
    }
  };

  // Handler: Toggle Favorite / Star
  const handleToggleFavorite = (id) => {
    setContacts(prev => prev.map(c => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c)));
  };

  // Handler: Edit User
  const handleEditUser = (user) => {
    setEditingUser(user);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Cancel Edit
  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  // Handler: Reset Filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRole('ALL');
  };

  // Helper: Toast trigger
  const showToast = (msg) => {
    setNotification(msg);
  };

  // Filtered Contacts Logic
  const filteredContacts = contacts.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedRole === 'ALL') return matchesSearch;
    if (selectedRole === 'FAVORITES') return matchesSearch && item.isFavorite;
    return matchesSearch && item.role === selectedRole;
  });

  return (
    <div class="app-root">
      <Header
        totalContacts={contacts.length}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main class="container">
        <div class="dashboard-grid">
          {/* Left Column: User Input Form Component */}
          <UserForm
            onAddUser={handleSaveUser}
            editingUser={editingUser}
            onCancelEdit={handleCancelEdit}
          />

          {/* Right Column: Dynamic Parent User List & Stats Area */}
          <div class="content-area">
            <StatsSummary contacts={contacts} />

            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedRole={selectedRole}
              onRoleChange={setSelectedRole}
              onClearAll={handleResetFilters}
            />

            <UserList
              users={filteredContacts}
              onDeleteUser={handleDeleteUser}
              onToggleFavorite={handleToggleFavorite}
              onEditUser={handleEditUser}
            />
          </div>
        </div>
      </main>

      <Notification
        message={notification}
        onClose={() => setNotification('')}
      />
    </div>
  );
}
