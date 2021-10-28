import React from "react";
import styled from 'styled-components';

const SuperHostIndicatorSC = styled.div`
    display: inline-block;
    padding: 6px 10px;
    min-width: max-content;
    width: auto;
    border: 1px solid ${props => props.theme.default.lighten1};
    border-radius: 12px;
    font-weight: 700;
    font-size: ${props => props.theme.font.very_small};
    color: ${props => props.theme.default.lighten1};
    
    @media (max-width: 768px) {
        font-size: ${props => props.theme.font.tiny};
    }
`;

const SuperHostIndicator = () => {
    return (
        <SuperHostIndicatorSC>SUPER HOST</SuperHostIndicatorSC>
    )
};

export default SuperHostIndicator;