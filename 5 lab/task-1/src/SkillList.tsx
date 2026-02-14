import type { Skill } from "./types";

interface SkillListProps {
    skills: Skill[];
} 

const SkillList = ({skills}: SkillListProps) => {
    const getBadgecolor = (level: string) => {
        switch (level) {
            case 'beginner': return 'green';
            case 'intermediate': return 'orange';
            case 'advanced': return 'red';
            default: return 'gray';
        }
    };
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} style={{ marginBottom: '5px' }}>
          {skill.name} — 
          <span style={{ 
            color: 'white', 
            backgroundColor: getBadgecolor(skill.level),
            padding: '2px 8px',
            marginLeft: '8px',
            borderRadius: '4px',
            fontSize: '0.8rem'
          }}>
            {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;