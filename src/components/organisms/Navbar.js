import React from "react";
import styled from 'styled-components';
import {ReactComponent as Logo} from "../../data/assets/logo.svg";
import SearchBar from "../molecules/SearchBar";

const Layout = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 20px;
    
    > svg {
        position: absolute;
        left: 0;
    }
`;


const Navbar = () => {
    return(
        <Layout>
            <SearchBar/>
            <Logo/>
        </Layout>
    );
};

export default Navbar;