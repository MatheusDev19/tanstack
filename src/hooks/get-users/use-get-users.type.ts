export interface IUser {
    id: string;
    name: string; 
    age: number;
    profession_id: string;
}

export interface IProfession {
    id: string;
    name: string; 
    postId: string;
}

export interface IReels {
    id: string;
    title: string; 
    views: number;
}