import React from 'react';

export const Header = (props) => {
    const title = "TO DO APP"
    return (
        <div className = "App-header">
            <h1>{props.title}</h1>;
        </div>
    )
};