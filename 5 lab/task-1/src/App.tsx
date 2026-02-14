import UserCard from './UserCard';
import SkillList from './SkillList';
import SearchApp from './SearcgApp';
import type { User, Skill } from './types';

function App() {
  // Данные для Lab 5.1
  const currentUser: User = { 
    name: "Alex Code", 
    email: "alex@dev.kz", 
    age: 20 
  };
  
  const mySkills: Skill[] = [
    { id: 1, name: "React", level: "intermediate" },
    { id: 2, name: "Go", level: "beginner" },
    { id: 3, name: "JavaScript", level: "advanced" }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* --- СЕКЦИЯ 1: Lab 5.1 --- */}
      <section style={{ marginBottom: '40px' }}>
        <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
          Lab 5.1: Components & Props
        </h1>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          {/* Карточка пользователя */}
          <div style={{ flex: 1 }}>
            <h3>User Profile</h3>
            <UserCard user={currentUser} isActive={true}>
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                "Fullstack student focused on Go & React."
              </p>
            </UserCard>
          </div>

          {/* Список навыков */}
          <div style={{ flex: 1 }}>
            <h3>Skills Dashboard</h3>
            <SkillList skills={mySkills} />
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '2px dashed #ccc', margin: '40px 0' }} />

      {/* --- СЕКЦИЯ 2: Lab 5.2 --- */}
      <section>
        <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
          Lab 5.2: State & Search Logic
        </h1>
        
        {/* Приложение поиска */}
        <SearchApp />
      </section>

    </div>
  );
}

export default App;
