import React, {useState} from "react";
import styled, {useTheme} from 'styled-components';
import {ReactComponent as Logo} from "../../data/assets/logo.svg";
import SearchBarOld from "../molecules/SearchBarOld";
import SearchBar from "./SearchBar";
import Container from "../atoms/Container";
import {darken, opacify} from "polished";

const Layout = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: auto;
    min-width: 320px;
    max-width: 1580px;
    width: 100%;
    gap: 20px;
    padding: var(--padding-size);
    
    > svg {
        position: absolute;
        left: 0;
    }
`;

const Backdrop = styled.div`
    background-color: ${props => darken(1,props.theme.background)};
    opacity: 0.4;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();

    return(
        <React.Fragment>
            {isOpen && <Backdrop onClick={() => setIsOpen(false)}/>}
            <Container flex backgroundColor={theme.background} width={"100%"} position={"relative"}>
                <Layout>
                    <SearchBar isOpen={isOpen} setIsOpen={setIsOpen}/>
                </Layout>
            </Container>
        </React.Fragment>
    );
};

export default Navbar;