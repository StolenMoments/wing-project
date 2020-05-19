import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import MenuButtons from "./Main/MenuButtons";
import MainLoginButton from "./Main/MainLoginButton";
import LOGO_URL from "./Constants/LOGO_URL";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Menu = () => {
    return (
        <Fragment>
            <StyledDiv>
                <Link to="/"><img src={LOGO_URL} alt="Win:G 로고"/></Link>
                <MainLoginButton/>
            </StyledDiv>
            <br/>
            <StyledDiv>
                <MenuButtons />
            </StyledDiv>
            <hr/>
        </Fragment>
    )
};

export default Menu;