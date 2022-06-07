import { UserState } from "../../models/UserState"

export const userInitState: UserState = {
    userData: {
        id: -1,
        firstName: '',
        lastName: '',
        role: []
    },
    isLogin: false,
    error: null
}