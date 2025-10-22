import React, { useState, useEffect } from "react";

const Card = ({ user, onEdit, onDelete, onLike }) => {
  const [liked, setLiked] = useState(user.liked || false);

  useEffect(() => {
    setLiked(user.liked || false);
  }, [user.liked]);

  const handleLike = () => {
    setLiked(prev => !prev);
    onLike();
  };

  return (
    <div className="user-card">
      <div className="card-top">
        <div className="avatar-wrap">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <div className="avatar-placeholder"></div>
          )}
        </div>
      </div>

      <div className="card-body">
        <h3 className="user-name">{user.name}</h3>
        <ul className="contact-list">
          <li>📧 {user.email}</li>
          <li>📞 {user.phone}</li>
          <li>🌐 <a href={user.website} target="_blank" rel="noreferrer">{user.website.replace(/^https?:\/\//,'')}</a></li>
        </ul>
      </div>

      <div className="card-actions">
        {/* Heart button */}
        <button
          className="icon-btn"
          onClick={handleLike}
          aria-label="Like"
          style={{ padding: 0 }}
        >
          {liked ? (
            // filled heart red
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#e11d48"
              />
            </svg>
          ) : (
            // outline heart
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="none"
                stroke="#e11d48"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>

        <button className="icon-btn" onClick={() => onEdit(user)} aria-label="Edit">✏️</button>
        <button className="icon-btn" onClick={() => onDelete(user.id)} aria-label="Delete">🗑️</button>
      </div>
    </div>
  );
};

export default Card;
