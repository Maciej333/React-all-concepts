import { User } from "./User"

export type UserState = {
    userData: User;
    isLogin: boolean,
    error: string | null
}