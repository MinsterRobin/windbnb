import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";
import Separator from "../atoms/Separator";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    min-width: 320px;
    max-width: 1580px;
    min-height: 100vh;
    padding: 0 var(--padding-size) var(--padding-size);
`;

const ContainerNavbar = styled.div`
    z-index: 1;
    position: fixed;
    width: 100%;
`;

const ContainerContent = styled.div`
    margin-top: 150px;
    width: 100%;
    flex: 1;
`;

const TemplateWindbnb = ({Navbar, Footer, children}) => {
    return(
        <Layout>
            <ContainerNavbar>
                <Navbar />
            </ContainerNavbar>

            <ContainerContent>
                {children}
            </ContainerContent>

            {Footer &&
            <React.Fragment>
                <Separator height={"100px"}/>
                <Footer/>
            </React.Fragment>}
        </Layout>
    );
};

TemplateWindbnb.propTypes = {
    Navbar: PropTypes.func,
    Footer: PropTypes.func
};

export default TemplateWindbnb;