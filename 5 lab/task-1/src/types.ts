export interface User {
    name: string;
    email: string;
    age: number;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
    id : number;
    name: string;
    level: SkillLevel;
}
