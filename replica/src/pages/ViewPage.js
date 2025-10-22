import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MOCK_USERS } from '../data';

export default function ViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // prefer passed state, fallback to mock dataset lookup
  const user = location.state?.user || MOCK_USERS.find(u => u.id === Number(id));

  if (!user) return <div style={{ padding: 40 }}>User not found</div>;

  return (
    <div style={{ padding: 24 }}>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="view-card">
        <div className="view-avatar">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="view-body">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={user.website} target="_blank" rel="noreferrer">{user.website}</a></p>
        </div>
      </div>
    </div>
  );
}
