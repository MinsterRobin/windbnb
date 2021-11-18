import React, {useState} from "react";
import styled, {useTheme} from 'styled-components';
import {ReactComponent as Logo} from "../../data/assets/logo.svg";
import SearchBar from "./SearchBar";
import Container from "../atoms/Container";
import {darken} from "polished";

const Layout = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin: auto;
    min-width: 320px;
    max-width: 1580px;
    width: 100%;
    gap: 20px;
    padding: var(--padding-size);
    
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
    }
    
    > svg {
        position: absolute;
        left: var(--padding-size);
        top: calc(var(--padding-size) + 18px);
        
        @media (max-width: 576px) {
            position: relative;
            align-self: flex-start;
            left: 0;
            top: 0;
        }
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
                    <Logo/>
                    <SearchBar isOpen={isOpen} setIsOpen={setIsOpen}/>
                </Layout>
            </Container>
        </React.Fragment>
    );
};

export default Navbar;