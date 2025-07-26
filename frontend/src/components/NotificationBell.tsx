import React, { useState } from 'react';

export const NotificationBell = ({ userRole }: { userRole: string }) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const fetchNotifications = async () => {
    const res = await fetch(`/api/notifications?role=${userRole}`);
    const data = await res.json();
    setNotifications(data);
    setOpen(true);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={fetchNotifications} style={{ fontSize: 24, background: 'none', border: 'none', cursor: 'pointer' }}>
        🔔
      </button>
      {open && (
        <div style={{
          position: 'absolute',
          right: 0,
          top: '2.5em',
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: 8,
          boxShadow: '0 2px 8px #0002',
          minWidth: 220,
          zIndex: 100
        }}>
          {notifications.length === 0 ? (
            <div style={{ padding: 16 }}>No notifications</div>
          ) : (
            notifications.map((n, i) => (
              <div key={i} style={{ padding: 12, borderBottom: '1px solid #eee' }}>{n.message}</div>
            ))
          )}
          <button onClick={() => setOpen(false)} style={{ width: '100%', padding: 8, border: 'none', background: '#f5f5f5', borderRadius: '0 0 8px 8px', cursor: 'pointer' }}>Close</button>
        </div>
      )}
    </div>
  );
};