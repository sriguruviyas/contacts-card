import React, { useEffect } from 'react';

/**
 * Notification Component
 * Toast notification for user actions.
 */
export default function Notification({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div class="notification-toast">
      <span>ℹ️</span>
      <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{message}</span>
    </div>
  );
}
