import React, {useState, useRef} from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import {P} from "../atoms/Typography";
import {lighten} from "polished";

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    cursor: pointer;
    max-width: 100%;
    width: 100%;
    min-width: 0;
    height: 100%;
    
    :hover {
        opacity: 0.9;
        background-color: ${props => lighten(0.74,props.theme.default.normal)};
    }    
`;

const Input = ({label, placeholder, value, onChange}) => {
    const refInput = useRef(null);
    const theme = useTheme();

    return(
        <InputLayout onClick={() => refInput.current.focus()}>
            {label && <P size={"tiny"} weight={"800"} family={"secondary"}>{label}</P>}
            <Button
                type="text"
                flex={1}
                onChange={onChange}
                value={value}
                ref={refInput}
                placeholder={placeholder}
            />
        </InputLayout>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string
};


export default Input;