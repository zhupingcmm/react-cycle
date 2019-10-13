const createStore =(reducer,preloadedState,enhancer)=>{
    let currentReducer = reducer;
    let currentListeners = [];
    let currentState = preloadedState;


    if(typeof preloadedState === "function" && typeof enhancer ==="undefined"){
        enhancer = preloadedState;
        preloadedState = undefined
    }

    if(typeof enhancer !== "undefined"){
        return enhancer(createStore)(reducer,preloadedState)
    }

    const subscribe=(listener)=>{
        currentListeners.push(listener)

    };
    const dispatch =(action)=>{
        currentState = currentReducer(currentState,action);

        for (let i = 0; i < currentListeners.length; i++) {
            let listener = currentListeners[i];
            listener()
        }
    };
    const getState = () => {
      return currentState
    };

    dispatch({
       type:"INIT"
    });

    return {
        subscribe,
        dispatch,
        getState
    }
};

module.exports={
    createStore,
};
