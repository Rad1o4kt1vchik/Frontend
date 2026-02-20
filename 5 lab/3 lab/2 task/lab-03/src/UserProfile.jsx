import { useState, useEffect } from 'react';

function UserProfile({ userId = 1 }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      setUser(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: abortController.signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    return () => {
      abortController.abort();
    };
  }, [userId]);

  if (loading) {
    return (
      <div className="user-profile loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-profile error">
        <h3>Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="user-profile">
        <div className="user-header">
          <h2>{user.name}</h2>
          <span className="user-id">ID: {user.id}</span>
        </div>
        
        <div className="user-info">
          <div className="info-item">
            <strong>Username:</strong>
            <span>{user.username}</span>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <span>{user.email}</span>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <span>{user.phone}</span>
          </div>
          <div className="info-item">
            <strong>Website:</strong>
            <span>{user.website}</span>
          </div>
          <div className="info-item">
            <strong>Company:</strong>
            <span>{user.company?.name}</span>
          </div>
          <div className="info-item">
            <strong>City:</strong>
            <span>{user.address?.city}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default UserProfile;
