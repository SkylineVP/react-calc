import React, {Component} from "react";
import {OPERATORS} from '../../Constants'
const operatorSing=new Map([  [OPERATORS.ADDITION,'+'],
    [OPERATORS.MULTIPLICATION,'*'],
    [OPERATORS.SUBTRACTION,'-'],
    [OPERATORS.DIVIDE,'/'],]

);
class Operator extends Component{
    constructor(props) {
        super(props);
        this.state={
            clicked:false
        }
    }
    onClickHandler=()=>{
        this.setState({clicked:true})

    };
    render() {
        const {operator,onClickHandler}=this.props;
        return (
            <div onClick={onClickHandler}>
                {this.props.children}
            </div>
        )
    }



}
export default Operator