import React from 'react';

/**
 * UserCard Component
 * Reusable contact card displaying individual user info, role badge, and actions.
 */
export default function UserCard({ user, onDelete, onToggleFavorite, onEdit }) {
  return (
    <div class="user-card">
      <div>
        <div class="card-top">
          <div class="avatar-wrapper">
            <span>{user.avatar || '👤'}</span>
          </div>

          <div class="card-actions-top">
            <button
              onClick={() => onToggleFavorite(user.id)}
              class={`star-btn ${user.isFavorite ? 'starred' : ''}`}
              title={user.isFavorite ? 'Unstar Contact' : 'Star Favorite Contact'}
              aria-label="Toggle Favorite"
            >
              {user.isFavorite ? '⭐' : '☆'}
            </button>
          </div>
        </div>

        <h3 class="user-name">{user.name}</h3>
        <span class="user-role-badge">{user.role}</span>

        <div class="user-details">
          <div class="detail-item">
            <span>📧</span>
            <a href={`mailto:${user.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {user.email}
            </a>
          </div>

          <div class="detail-item">
            <span>📱</span>
            <a href={`tel:${user.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {user.phone}
            </a>
          </div>

          <div class="detail-item">
            <span>📍</span>
            <span>{user.location}</span>
          </div>
        </div>

        {user.bio && (
          <div class="user-bio">
            "{user.bio}"
          </div>
        )}
      </div>

      <div class="card-footer">
        <button
          onClick={() => onEdit(user)}
          class="btn btn-secondary"
          style={{ flexGrow: 1, padding: '0.45rem 0.8rem', fontSize: '0.825rem' }}
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => onDelete(user.id)}
          class="btn btn-danger"
          style={{ padding: '0.45rem 0.8rem', fontSize: '0.825rem' }}
          title="Delete Contact Card"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
