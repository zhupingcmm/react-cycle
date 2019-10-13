import React,{Component} from "react";
// import {connect} from "react-redux";
import {connect} from "../../fake-react-redux";

class Demo extends Component{
    constructor(props){
        super(props)
    }
    addCount(){
        this.props.add(1);
    }
    deleteCount(){
        this.props.delete(1);
    }
    render() {
        console.log("this.props.data::",this.props);
        const {data} = this.props;
        return (
            <div>
                <div onClick={this.addCount.bind(this)}>+</div>
                <div onClick={this.deleteCount.bind(this)}>-</div>
                <div>{data || 0}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps:::",state);
    return{
        data:state.root.data
    }
}

function mapDispatchToProps(dispatch) {
    return{
        add:(data)=>{
            dispatch({
                type:"ADD",
                data
            })
        },
        delete:(data)=>{
            dispatch({
                type:"DELETE",
                data
            })
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Demo)
