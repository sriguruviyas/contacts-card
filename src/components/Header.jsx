import React from 'react';

/**
 * Header Component
 * Navbar containing application branding, count badge, and theme switcher.
 */
export default function Header({ totalContacts, theme, onToggleTheme }) {
  return (
    <header class="header-bar">
      <div class="container header-content">
        <div class="brand">
          <span class="brand-icon">📇</span>
          <div>
            <h1 class="brand-title">Contact Cards Manager</h1>
            <span class="brand-tag">React SPA Project</span>
          </div>
        </div>

        <div class="header-actions">
          <button 
            onClick={onToggleTheme} 
            class="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
