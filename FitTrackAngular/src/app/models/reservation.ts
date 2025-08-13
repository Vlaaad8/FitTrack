import { Training } from "./training";
import { User } from "./user";

export interface Reservation{
    id: number,
    user: User,
    training: Training,
    date: Date,
    status: string
}