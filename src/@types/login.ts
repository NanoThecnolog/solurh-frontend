export interface UserProps {
    user: User,
    token: string;
}
export type User = {
    id: number;
    nome: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}