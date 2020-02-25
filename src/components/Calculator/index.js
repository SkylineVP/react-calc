import React, {Component} from "react";
import OPERATORS from '../../Constants'
import style from './Calculator.module.scss'
import Operator from "../Operator";
import DigitButton from "../DigitButton";
import Dislplay from "../Display";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftOperand: null,
            rightOperand: null,
            operator: null,
            result: '',

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
            <div className={style.Calculator}>
                <Dislplay>0000</Dislplay>
                <table>
                    <tr>
                        <td className={style.Operator}><Operator>+</Operator></td>
                        <td className={style.Operator}><Operator>-</Operator></td>
                        <td className={style.Operator}><Operator>X</Operator></td>
                        <td className={style.Operator}><Operator>/</Operator></td>
                    </tr>
                    <tr>
                        <td><DigitButton>7</DigitButton></td>
                        <td><DigitButton>8</DigitButton></td>
                        <td><DigitButton>9</DigitButton></td>
                        <td rowSpan={4} className={style.equal}><DigitButton>=</DigitButton></td>
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