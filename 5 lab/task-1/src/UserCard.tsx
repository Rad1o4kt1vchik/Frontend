import type { User } from "./types";
import type { ReactNode } from "react";

interface UserCardProps {
    user: User;
    isActive: boolean;
    children?: ReactNode;
}

const UserCard = ({user, isActive = true, children}: UserCardProps) => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '10px',
            opacity: isActive ? 1 : 0.5,
            marginBottom: '10px'
        }}>
            <h2>{user.name}</h2>
            <p>{user.email} | Age: {user.age}</p>
            <div>{children}</div>
        </div>
    )
}

export default UserCard;