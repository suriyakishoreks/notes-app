// CONSTANTS
export const ItemTypes = {
    Note: "Note",
}

export const localStorageKey = 'Notes';

// FUNCTIONS
export function getFromLocalStorage(key) {

    const storage = localStorage.getItem(key);

    if (storage) {

        return {
            hasLocalData: true,
            data: JSON.parse(storage)
        };
    }
    return {
        hasLocalData: false,
        data: null
    };
}

export function setLocalStorage(key, value) {
    if (key && value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    return false;
}