export const initialState = {
    user: {
        name: 'Vasya',
        surname: 'Pupkin',
        age: 34,
    },
}

export function rootReducer(state = initialState) {
    return state
}
