const initialState = {
    posts: [
        {
            id: 1,
            title: '1 title',
            text: '1 text',
        },
        {
            id: 2,
            title: '2 title',
            text: '2 text',
        },
        {
            id: 3,
            title: '3 title',
            text: '3 text',
        }
    ]
}

export function newsReducer(state = initialState, action) {
    return state;
}