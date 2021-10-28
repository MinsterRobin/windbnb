import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BnbTitleSC = styled.p`
    color: ${props => props.theme.default.normal};
    font-size: ${props => props.theme.font.regular};
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: ${props => props.theme.font.small};
    }
`;

const BnbTitle = ({children}) => {
    return (
        <BnbTitleSC>
            {children}
        </BnbTitleSC>
    );
};

BnbTitle.propTypes = {
    children: PropTypes.string.isRequired,
};

export default BnbTitle;