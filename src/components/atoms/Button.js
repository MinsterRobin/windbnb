import styled from 'styled-components';
import PropTypes from 'prop-types';
import {lighten} from "polished";

const Button = styled.input`
    flex: ${props => props.flex ? props.flex : "unset"};
    display: flex;    
    padding: ${props => props.padding ? props.padding : 0};
    width: 100%;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};
    color: ${props => props.color ? props.theme[props.color] : props.theme[props.theme.default.normal]};
    
    border: ${props => props.border ?
        props.border.size + " solid " + props.border.color :
        "none"
    };
    border-radius: ${props => props.radius ? props.radius : 0};
    color: ${props => props.theme.default.normal};
    cursor: pointer;
    overflow: hidden;
    transition: all 100ms ease-in-out;
    
    &:hover {
        opacity: 0.9;
        background-color: ${props => lighten(0.74,props.theme.default.normal)};
    }
    
    :focus {
        outline: none;
    }
`;

Button.propTypes = {
    flex: PropTypes.number,
    borderRadius: PropTypes.oneOf(["left", "right", "all"]),
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    border: PropTypes.shape({
        size: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }),
    radius: PropTypes.string,
};

export default Button;