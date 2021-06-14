let state = {count: 0}

function reducer(staate, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
            default:
                return state;
    }
}
