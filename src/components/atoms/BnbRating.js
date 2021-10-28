import React from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import {ReactComponent as StarIcon} from "../../data/assets/Star_Rounded.svg";

const Layout = styled.div`
    display: flex;
    align-items: center;
    
    p {
        display: inline-block;
        color: ${props => props.theme.default.lighten1};
        font-size: ${props => props.theme.font.small};
        font-weight: 500;
        margin-left: 6px;
    }
    
    svg {
      opacity: 0.72;
        height: 16px;
        width: 16px;
    }
    
    @media (max-width: 768px) {
        font-size: ${props => props.theme.font.very_small};
    }
`;

const BnbRating = ({rating}) => {
    const theme = useTheme();
    return (
        <Layout>
            <StarIcon fill={theme.primary}/>
            <p>{rating}</p>
        </Layout>
    );
};

BnbRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default BnbRating;