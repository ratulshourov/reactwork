import React from 'react';

const Buttonalert=(a)=>{
    alert(a);
}

const Arrowwork=()=>{
return(
    <div>
        <button onClick={Buttonalert.bind(this,"I Am From Alert ")}>I Am From Arrow Function</button>
    </div>
);
}

export default Arrowwork;