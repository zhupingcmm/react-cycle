const combineReducers = (reducers) =>{
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};

    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i];
        finalReducers[key] = reducers[key]
    }

    const finalReducerKeys = Object.keys(finalReducers);

    return combination =(state={},action) => {
        let hasChanged = false;
        const nextState ={};
        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];

            const nextStateForKey =reducer(previousStateForKey,action);
            nextState[key] = nextStateForKey;

            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;

        }

        return hasChanged ? nextState : state
    }

};

module.exports ={
    combineReducers
};
