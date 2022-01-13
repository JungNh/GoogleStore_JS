export const SET_USER_NAME = "SET_USER_NAME"
export const SET_USER_AGE = "SET_USER_AGE"

export const setName = (name) => distpatch => {
    distpatch({
        type: SET_USER_NAME,
        payload: name
    })
};

export const setAge = (age) => distpatch => {
    distpatch({
        type:SET_USER_AGE,
        payload: age
    })
};