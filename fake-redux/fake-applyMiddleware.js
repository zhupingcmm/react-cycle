const {compose} = require("./fake-compose");
const applyMiddleware =(...middlewares)=>{
    return createStore=>(...args)=>{

        let store = createStore(...args);
        let dispatch = ()=>{
            console.log("middleware dispatch :::")
        };
        const middlewareApi = {
            getState:store.getState(),
            dispatch:(...args)=> dispatch(...args)
        };

        let chain = middlewares.map(middleware=>middleware(middlewareApi));
        console.log("compose:::",compose);
        dispatch = compose(chain)(store.dispatch);
        return{
            ...store,
            dispatch
        }
    }
};

module.exports={
    applyMiddleware
};
