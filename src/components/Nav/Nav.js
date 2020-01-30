import React from 'react';
import NavButton from '../NavButton/NavButton';

const Nav = (props) => {
    return (
        <div className="block-wrapper">
            {
                props.navData.map(item => {
                    return <NavButton key={item.id} id={item.id} buttonText={item.buttonText} clickNav={props.clickNav} />
                })
            }
        </div>
    )
}

export default Nav;