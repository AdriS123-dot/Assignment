import React, { useState, useEffect } from 'react';
import { MOCK_USERS } from '../data';
import Card from '../components/Card';
import EditPage from '../pages/EditPage';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    setUsers(MOCK_USERS.map(u => ({ ...u })));
  }, []);

  const toggleLike = (id) => {
  setUsers(prev => prev.map(u => u.id === id ? { ...u, liked: !u.liked } : u));
};


  const deleteUser = (id) => {
    if (!window.confirm('Delete this user?')) return;
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const openEdit = (id) => setEditUserId(id);
  const closeEdit = () => setEditUserId(null);

  const saveEdit = (updatedUser) => {
    setUsers(prev => prev.map(u => u.id === updatedUser.id ? { ...updatedUser } : u));
    closeEdit();
  };

  return (
    <div className="page-wrap-no-navbar">
      <div className="grid-wrap">
        {users.map(user => (
          <Card
            key={user.id}
            user={user}
            onLike={() => toggleLike(user.id)}
            onDelete={() => deleteUser(user.id)}
            onEdit={() => openEdit(user.id)}
          />
        ))}
      </div>

      {editUserId && (
        <EditPage
          user={users.find(u => u.id === editUserId)}
          onClose={closeEdit}
          onSave={saveEdit}
        />
      )}
    </div>
  );
}
