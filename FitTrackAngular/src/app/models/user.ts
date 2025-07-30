export interface User{
    id: number,
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    role: string
}

export interface Subscription{
    id: number;
    startDate: Date,
    endDate: Date,
    type: string,
    user: User
}