//all redux actions

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

export const addCartItems = (stickerID, stickerQty) => {
    return {
        type: 'ADD_STICKER',
        id: stickerID,
        qty: stickerQty
    };
};

export const removeCartItems = (stickerID) => {
    return {
        type: 'REMOVE_STICKER',
        id: stickerID
        
    };
};


export const updateCartItems = (stickerID, stickerQty) => {
    return {
        type: 'UPDATE_STICKER',
        id: stickerID,
        qty: stickerQty
    };
};

export const resetCartItems = () => {
    return {
        type: 'RESET_CART'
    };
};

