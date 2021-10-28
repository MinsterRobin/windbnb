import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BnbTypeSC = styled.p`
    color: ${props => props.theme.default.lighten2};
    font-size: ${props => props.theme.font.small};
    font-weight: 500;
    
    @media (max-width: 768px) {
        font-size: ${props => props.theme.font.very_small};
    }
`;

const BnbType = ({children}) => {
    return (
        <BnbTypeSC>
            {children}
        </BnbTypeSC>
    );
};

BnbType.propTypes = {
    children: PropTypes.string.isRequired,
};

export default BnbType;