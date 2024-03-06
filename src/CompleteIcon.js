import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ type, onComplete}) {
    return (
        < TodoIcon type= { type } color= 'green'  
        onClick={onComplete}
        />
    )
}

export { CompleteIcon }