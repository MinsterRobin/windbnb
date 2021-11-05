import {css} from "styled-components";

export const Primary = (array) => css`
    padding: ${props => props.padding ?
        (props.padding.length === 1 && props.padding[0]) ||
        (props.padding.length === 2 && props.padding[0] + " " + props.padding[1]) ||
        (props.padding.length === 3 && props.padding[0] + " " + props.padding[1] + " " + props.padding[2]) ||
        (props.padding.length === 4 && props.padding[0] + " " + props.padding[1] + " " + props.padding[2] + " " + props.padding[3]) :
        0
    };
`;