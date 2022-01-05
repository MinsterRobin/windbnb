import {ReactComponent as LogoLocation} from "../../data/assets/Location.svg";
import Separator from "./Separator";
import {P} from "./Typography";
import React from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from "prop-types";

const ContainerLocation = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all ease-in-out 150ms;
    
    :hover {
        opacity: 0.7;
    }
`;

const Location = ({children, onClick}) => {
    const theme = useTheme();

    return(
        <ContainerLocation flex align={"center"} onClick={onClick}>
            <LogoLocation fill={theme.default.lighten1}/>
            <Separator width={"10px"} />
            <P size={"small"} weight={"400"} family={"secondary"}>{children}</P>
        </ContainerLocation>
    );
};

Location.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Location;

