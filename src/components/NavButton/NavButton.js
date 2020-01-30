import React from 'react';

const NavButton = (props) => {
    // const hrefLink = '';
    return (
        <button  className="focusable" id={props.id} onClick={(e)=>props.clickNav(e)}>{props.buttonText}</button>
    )
}

export default NavButton;