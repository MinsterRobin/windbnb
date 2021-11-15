import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
    position: ${props => props.position};
    display: ${props => props.flex && "flex"};
    flex-direction: ${props => props.vertical && "column"};
    flex-wrap: ${props => props.wrap && "wrap"};
    justify-content: ${props => props.justify && props.justify};
    align-items: ${props => props.align && props.align};
    padding: ${props => props.padding && props.padding};
    margin: ${props => props.margin && props.margin}; 
    width: ${props => props.width ? props.width : "100%"};
    min-width: 0;
    max-height: ${props => props.maxHeight ? props.maxHeight : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    overflow: ${props => props.overflow ? props.overflow : "none"};
    flex: ${props => props.flexSize ? props.flexSize : "unset"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};
    gap: ${props => props.gap ? props.gap : "unset"};
`;

Container.propTypes = {
    flex: PropTypes.bool,
    position: PropTypes.string,
    wrap: PropTypes.bool,
    vertical: PropTypes.bool,
    align: PropTypes.string,
    justify: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    overflow: PropTypes.string,
    flexSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    gap: PropTypes.string
};

export default Container;