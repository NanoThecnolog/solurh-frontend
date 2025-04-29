export interface UserProps {
    user: {
        id: number;
        nome: string;
        email: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    },
    token: string;
}