import React from "react";
import styled from 'styled-components';
import {ReactComponent as Logo} from "../../data/assets/logo.svg";
import SearchBarOld from "../molecules/SearchBarOld";
import SearchBar from "./SearchBar";

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 20px;
    background-color: white;
    padding: var(--padding-size);
    
    > svg {
        position: absolute;
        left: 0;
    }
`;


const Navbar = () => {
    return(
        <Layout>

            <SearchBar/>
        </Layout>
    );
};

export default Navbar;