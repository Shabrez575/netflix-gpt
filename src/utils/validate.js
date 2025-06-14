export const checkValidDateSignIn = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email id is not valid!";
    if(!isPasswordValid) return "Password is not valid";

    return null;
};

export const checkValidDateSignUp = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullName = /^([A-Z][a-z]{1,15})(\s[A-Z][a-z]{1,15}){1,3}$/.test(name);

    if(!isEmailValid) return "Email id is not valid!";
    if(!isPasswordValid) return "Password is not valid";
    if(!isFullName) return "Full Name is not valid";

    return null;
};