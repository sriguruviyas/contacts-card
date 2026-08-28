import React from 'react';
import UserCard from './UserCard.jsx';

/**
 * UserList Component (Parent Container for Contact Cards)
 * Receives the array of users and maps them dynamically to child UserCard components.
 */
export default function UserList({ users, onDeleteUser, onToggleFavorite, onEditUser }) {
  if (users.length === 0) {
    return (
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No Contact Cards Found</h3>
        <p>Use the form on the left to add a new contact card, or adjust your search filter.</p>
      </div>
    );
  }

  return (
    <div class="user-list-grid">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={onDeleteUser}
          onToggleFavorite={onToggleFavorite}
          onEdit={onEditUser}
        />
      ))}
    </div>
  );
}
