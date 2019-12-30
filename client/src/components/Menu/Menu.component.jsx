import React from 'react';
import styled from 'styled-components';
import {Root, Logo, Menus, Hamburger, Sign, ButtonStyles} from './Menus.styles';



function Menu(){
    return(
        <Root>
        <div className = "container">
            <Logo>
                <Hamburger>
                    <div></div>
                    <div></div>
                    <div></div>
                </Hamburger>
                <h3>fast<span className = "white">web</span></h3>
            </Logo>
            <Menus>
                <ul>
                    <li>Schoolarship</li>
                    <li>Intership</li>
                    <li>Student loans</li>
                    <li>Part-time Jobs</li>
                    <li>Student Deals</li>
                    <li>Articles</li>
                </ul>
            </Menus>
            <Sign>
                <p>Log in</p>   
                <ButtonStyles>Sign in</ButtonStyles>
            </Sign>    
        </div>
        </Root>
    )
}

export default Menu;