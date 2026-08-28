import React from 'react';

/**
 * StatsSummary Component
 * Displays dynamic metrics (Total Contacts, Favorite Cards, Role Breakdown).
 */
export default function StatsSummary({ contacts }) {
  const total = contacts.length;
  const favorites = contacts.filter(c => c.isFavorite).length;

  // Calculate unique role count
  const roles = new Set(contacts.map(c => c.role.trim())).size;

  return (
    <div class="stats-bar">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div>
          <div class="stat-val">{total}</div>
          <div class="stat-label">Total Contacts</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div>
          <div class="stat-val">{favorites}</div>
          <div class="stat-label">Favorites</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">💼</div>
        <div>
          <div class="stat-val">{roles}</div>
          <div class="stat-label">Distinct Roles</div>
        </div>
      </div>
    </div>
  );
}
