import React from "react";
import style from './Display.module.scss'

function Dislplay(props) {
    return (
        <div className={style.Display}>{props.children}</div>
    )
}

export default Dislplay