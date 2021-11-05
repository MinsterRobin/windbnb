import React, {useState} from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import Container from "../atoms/Container";
import SearchBar from "../molecules/SearchBar";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.isOpen ? "100%" : "340px"};
`;

const SearchModulde = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Layout isOpen={isOpen}>
            <SearchBar/>
        </Layout>
    );
};

export default SearchModulde;