import React,{Component} from "react";
import OPERATORS      from '../../Constants'
import style             from   './Calculator.module.scss'
import Operator          from "../Operator";
import DigitButton       from "../DigitButton";
class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state={
            leftOperand:null,
            rightOperand:null,
            operator:null,
            result:'',

        };
        this.behaviour=null;
    }
    onEqualClickHandler=()=>{

    };
    setOperator=()=>{

      this.behaviour=this.state.operator
    };
    render() {
        return (
            <div>
                <input type="text" value='operand'/>
                <table>
                    <tr>
                        <td><Operator>+</Operator></td>
                        <td><Operator>-</Operator></td>
                        <td><Operator>X</Operator></td>
                        <td><Operator>/</Operator></td>
                    </tr>
                    <tr>
                        <td><DigitButton>7</DigitButton></td>
                        <td><DigitButton>8</DigitButton></td>
                        <td><DigitButton>9</DigitButton></td>
                        <td rowSpan={4}><DigitButton>=</DigitButton></td>
                    </tr>
                    <tr>
                        <td><DigitButton>4</DigitButton></td>
                        <td><DigitButton>5</DigitButton></td>
                        <td><DigitButton>6</DigitButton></td>
                    </tr>
                    <tr>
                        <td><DigitButton>1</DigitButton></td>
                        <td><DigitButton>2</DigitButton></td>
                        <td><DigitButton>3</DigitButton></td>
                    </tr>
                    <tr>
                        <td><DigitButton>0</DigitButton></td>
                        <td><DigitButton>.</DigitButton></td>
                        <td><DigitButton>C</DigitButton></td>

                    </tr>
                </table>
            </div>
        );
    }

}
export default Calculator;