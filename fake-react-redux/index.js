import React,{Component} from "react";

const ReactReduxContext =()=>{
  return React.createContext(null)
};

const ReduxContext = ReactReduxContext();

class Provider extends Component{

    render() {
        const {store} = this.props;
        return (
            <ReduxContext.Provider value={store}>
                {this.props.children}
            </ReduxContext.Provider>
        );
    }

}

const connect = (mapStateToProps,mapDispatchToProps)=>(ConnectComponent)=>{
    return class extends Component {
        constructor(props){
            super(props);
            this.state ={
                mergeProps:null
            }
        }
        static contextType = ReduxContext;

        componentDidMount() {
            const store = this.context;

            console.log("componentDidMount::::");
            this.setState({
                mergeProps:this.computeProps(this.context)
            });
            store.subscribe(()=>{
                const mergeProps = this.computeProps(store);
                this.setState({mergeProps});

            })
        }

        computeProps(store){
            const stateToProps = mapStateToProps(store.getState());

            const dispatchToProps = mapDispatchToProps((...args)=>{store.dispatch(...args)});
            console.log("stateToProps::", stateToProps,"dispatchToProps::", dispatchToProps);
            return {...stateToProps,...dispatchToProps}
        }




        render() {

            console.log("context:::",this.context);

            console.log("state:::::",this.state);
            const {mergeProps} =this.state;
            return (
                <ConnectComponent {...mergeProps} {...this.props}/>
            );
        }

    }
};


export  {
    Provider,
    connect
}
