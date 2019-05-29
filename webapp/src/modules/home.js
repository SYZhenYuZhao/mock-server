const initialState = {
    num:1
}

//constants
const NUM_INCREASE = 'NUM_INCREASE'
const NUM_DECREMENT = 'NUM_DECREMENT'
//action
const numIncrease = dispatch => args => {
    dispatch({
        type: NUM_INCREASE,
    })
}
const numDecrement = (dispatch) => args => {
    dispatch({
        type: NUM_DECREMENT,
    })
}
export {
    numIncrease,
    numDecrement,
}

//reducer
export default function reducer (state = initialState,action = {}){
    switch (action.type) {
        case NUM_INCREASE:
            return Object.assign({},state,{num:state.num+1});
        case NUM_DECREMENT:
            return Object.assign({},state,{num:state.num-1});
        default:
            return state;
    }
}