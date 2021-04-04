import React from 'react';
const Menu = ({clicked}) => {
    return(
        <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line style={{transformOrigin: 'right', transition: '.2s ease all' ,transform: `rotate(${clicked == true ? `-45deg` : 0}) translate( ${clicked == true ? `5px` : 0},0)`}} x1="1.125" y1="1.5" x2="25.875" y2="1.5" stroke="#11585B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            <line style={{opacity: `${clicked == true ? '0' : '1'}`, transition: '.2s ease all'}} x1="9" y1="9.375" x2="25.875" y2="9.375" stroke="#11585B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
            <line style={{transformOrigin: 'right', transition: '.2s ease all' ,transform: `rotate(${clicked == true ? `45deg` : 0}) translate( ${clicked == true ? `5px` : 0},0)`}} x1="1.125" y1="17.25" x2="25.875" y2="17.25" stroke="#11585B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Menu;