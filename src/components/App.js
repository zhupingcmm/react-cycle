import React,{Component} from "react";
import Demo from "./Demo";

class App extends Component{
    constructor(props){
        super(props)
    }

    render() {
        console.log("App:::",this.props);
        return (
            <div>
                APP
                <Demo/>
            </div>
        );
    }
}

export default App
