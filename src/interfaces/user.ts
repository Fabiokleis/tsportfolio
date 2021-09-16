export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    date?: string | Date | undefined;
    createdat?: string | Date;
    updatedat?: string | Date;
    tokendate?: string | Date;
    resettoken?: string;
    bio?: string;
}

export interface NewUser {
    id: number,
    name: string,
    email: string
}

export interface UserDecoded {
    id: number,
    email: string,
    name: string,
    iat: number,
    exp: number
}

export interface Login {
    email: string,
    password: string
}

export interface UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    date: string | Date;
    createdat: string | Date;
    updatedat: string | Date;
    tokendate: string | Date;
    resettoken: string;
    bio: string;
}
