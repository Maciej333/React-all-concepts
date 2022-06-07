import { UserRoles } from "../../utils/userRoles.enum";
import { numberMinMax, required, stringLength } from "../../utils/validatorFunctions";

type IState = {
    firstname: string,
    lastname: string,
    role: string
}

export const validate = (
    state: IState,
    setError: React.Dispatch<React.SetStateAction<IState>>
) => {
    let result = true;
    const userRoleLength = Object.keys(UserRoles).length / 2 - 1;

    const { firstname, lastname, role } = state;

    let errorFirstname: string;
    errorFirstname = required("Firstname is required")(firstname);
    if (errorFirstname) {
        result = false;
    } else {
        errorFirstname = stringLength("length > 3 < 12", 3, 12)(firstname);
        if (errorFirstname) {
            result = false;
        }
    }

    let errorLastname: string;
    errorLastname = required("Lastname is required")(lastname);
    if (errorLastname) {
        result = false;
    } else {
        errorLastname = stringLength("length > 3 < 12", 3, 12)(lastname);
        if (errorLastname) {
            result = false;
        }
    }

    let errorRole = numberMinMax("Select role", 0, userRoleLength)(Number(role))
    if (errorRole) {
        result = false;
    }

    setError({
        firstname: errorFirstname,
        lastname: errorLastname,
        role: errorRole
    })

    return result;
}