import { User } from "./User"

export type UserAction = {
    type: String;
    payload: User | null;
}