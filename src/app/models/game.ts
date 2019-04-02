import { User } from 'src/app/models/user';

export class Game {
        g_id: number;
        word: string;
        picture: string;
        guess: string;
        turn: number;
        users: User[];
}