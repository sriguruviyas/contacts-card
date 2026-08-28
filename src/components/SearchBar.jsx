import React from 'react';

/**
 * SearchBar Component
 * Search input and category filter controls.
 */
export default function SearchBar({ searchQuery, onSearchChange, selectedRole, onRoleChange, onClearAll }) {
  return (
    <div class="search-container">
      <div class="search-input-wrapper">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search contacts by name, email, location..."
          class="form-control"
        />
      </div>

      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
        class="filter-select"
      >
        <option value="ALL">All Job Roles</option>
        <option value="Web Developer">Web Developer</option>
        <option value="Frontend Engineer">Frontend Engineer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Software Student">Software Student</option>
        <option value="Project Manager">Project Manager</option>
        <option value="FAVORITES">⭐ Favorites Only</option>
      </select>

      {onClearAll && (
        <button onClick={onClearAll} class="btn btn-secondary" style={{ fontSize: '0.825rem', padding: '0.5rem 0.9rem' }}>
          Reset All
        </button>
      )}
    </div>
  );
}
