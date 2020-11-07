export const isAdmin = () => {
    return {
        type: 'IS_ADMIN'
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};


export const isLogged = (id, name, email) => {
    return {
        type: 'SIGN_IN',
        id: id,
        name: name,
        email: email
    };
};
