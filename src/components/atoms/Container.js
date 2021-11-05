import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
    display: ${props => props.flex && "flex"};
    flex-direction: ${props => props.vertical && "column"};
    flex-wrap: ${props => props.wrap && "wrap"};
    justify-content: ${props => props.justify && props.justify};
    align-items: ${props => props.align && props.align};
    padding: ${props => props.padding && props.padding};
    margin: ${props => props.margin && props.margin}; 
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};
    overflow: ${props => props.overflow ? props.overflow : "100%"};
    flex: 1;    
`;

Container.propTypes = {
    flex: PropTypes.bool,
    wrap: PropTypes.bool,
    vertical: PropTypes.bool,
    align: PropTypes.string,
    justify: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    overflow: PropTypes.string
};

export default Container;