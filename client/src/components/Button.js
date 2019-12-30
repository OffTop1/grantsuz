import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

function Button (){
    const Link = ({ className, children }) => (
        <a className = {className} >
            {children}
        </a>
    )
    
    const StyledLink = styled(Link)`
        color: palevioletred;
        font-weight: bold;
        &:hover{
            color: red;
        }
        &.something{
            background: green;
        }
        .something-else & {
            background-color: red;
        }
    `
    return(
        <div>
            <Link to = "/contacts">This is react router-dom's link</Link>
            <StyledLink>Qwesome link</StyledLink>
            <StyledLink className = "something">Qwesome link</StyledLink>
            <div className = "something-else">
                <StyledLink>something else</StyledLink>
            </div>
        </div>
    )
}

export default Button;