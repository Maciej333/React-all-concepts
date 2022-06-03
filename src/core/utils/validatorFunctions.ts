export const required = (errString: string) => (data: any): string => {
    if (data) {
        return "";
    } else {
        return errString;
    }
}

export const numberMinMax = (errString: string, min: number, max: number) => (data: any): string => {
    if (data >= min && data <= max) {
        return "";
    } else {
        return errString;
    }
}

export const stringLength = (errString: string, min: number, max: number) => (data: any): string => {
    if (data.length >= min && data.length <= max) {
        return "";
    } else {
        return errString;
    }
}

export const sameStrings = (errString: string) => (elements: { first: string, second: string }): string => {
    if (elements.first === elements.second) {
        return "";
    } else {
        return errString;
    }
}