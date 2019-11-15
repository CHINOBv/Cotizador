import React from 'react';

const Header =(props)=>{
    return(
        <div className="container bg-info d-flex justify-content-center">
            <h1>
                {props.titulo}
            </h1>
        </div>
        )
}
export default Header;