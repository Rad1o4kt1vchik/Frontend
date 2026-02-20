import { useState } from 'react';
import UserProfile from './UserProfile';

function UserProfileApp() {
  const [userId, setUserId] = useState(1);

  const handleUserChange = (id) => {
    setUserId(id);
  };

  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setUserId(randomId);
  };

  return (
    <div className="user-profile-app">
      <h1>User Profile Viewer</h1>
      <p className="subtitle">
        Демонстрация useEffect, cleanup и dependency array
      </p>

      <div className="controls">
        <div className="user-buttons">
          <button 
            onClick={() => handleUserChange(1)}
            className={userId === 1 ? 'active' : ''}
          >
            User 1
          </button>
          <button 
            onClick={() => handleUserChange(2)}
            className={userId === 2 ? 'active' : ''}
          >
            User 2
          </button>
          <button 
            onClick={() => handleUserChange(3)}
            className={userId === 3 ? 'active' : ''}
          >
            User 3
          </button>
        </div>

        <button onClick={handleRefresh} className="refresh-btn">
          Refresh (Random User)
        </button>
      </div>

      <div className="profile-container">
        <p className="current-user">Current User ID: {userId}</p>
        <UserProfile userId={userId} />
      </div>
    </div>
  );
}

export default UserProfileApp;
