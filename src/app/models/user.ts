export class User {
    public constructor(init?: Partial<User>){
        Object.assign(this, init);
    }
    uId: number;
    username: string;
    password: string;
    email: string;
    admin: string;
    points: number;
    gamesPlayed: number;
    wins: number;
}