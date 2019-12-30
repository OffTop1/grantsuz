import styled, {css}  from 'styled-components'

export const Root = styled.div`
    padding: 0.9em;
    background-color: #2196f3;
    color: #fff;

    .container
    {
        width: 90%;
        margin: 0px auto;
        display: grid;
        grid-template-columns: 13% 75% 12%;
        align-items: center;
    }
    
`;

export const Logo = styled.div`

    font-size: 24px;
    font-weight: bolder;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3{
        color: #FFCB8B;
        margin: 0px;
        padding: 0px;
        display: inline;
    }
    .white{
        color: #fff;
    }
`;



export const Menus = styled.div`
    ul
    {
        list-style: none;
    }
    ul li
    {
        display: inline;
        margin: 0em 1em;
    }
`

export const Hamburger = styled.div`
    div{
        width: 25px;
        height: 1px;
        background-color: #fff;
        margin: 7px 0;
    }
`;

export const Sign = styled.div`
    display: flex;
    justify-content: space-between;
    p
    {
        color: #fff;
        display: inline;
        text-align: right;
    }
`;

export const ButtonStyles = styled.button`
    background: #004156;
    align-self: center;
    border: none;
    color: #fff;
    border-radius: 3px;
    font-size: 15px;
    padding: 0.6em 1em;
`;