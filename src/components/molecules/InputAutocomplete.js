import React, {useState, useRef} from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import {P} from "../atoms/Typography";
import {lighten} from "polished";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: inherit;
`;

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    
    :hover {
        opacity: 0.9;
        background-color: ${props => lighten(0.74,props.theme.default.normal)};
    }    
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    
    p {
        padding: 12px 16px;
        cursor: pointer;
        
        :hover {
            opacity: 0.7;  
        }
    }
`;

const InputAutocomplete = ({options, onChange}) => {
    const [value, setValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);
    const refInput = useRef(null);
    const theme = useTheme();

    const handleChange = (e) => {
        setValue(e.currentTarget.value);
        if (options.length && e.currentTarget.value.length ) {
            setFilteredOptions(options.filter((option) =>
                option.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1)
            );
        } else if (!e.currentTarget.value.length) {
            setFilteredOptions([]);
        }
    };

    const handleOptionClick = (option) => {
        setFilteredOptions([]);
        setValue(option);
    };

    return(
        <Layout>
            <InputLayout onClick={() => refInput.current.focus()}>
                <P size={"tiny"} weight={"800"} family={"secondary"}>LOCATION</P>
                <Button
                    type="text"
                    flex={1}
                    onChange={handleChange}
                    value={value}
                    ref={refInput}
                />
            </InputLayout>

            <OptionsContainer>
                {filteredOptions.map((option, index) =>
                    <p key={index} onClick={() => handleOptionClick(option)}>{option}</p>
                )}
            </OptionsContainer>
        </Layout>
    );
};

InputAutocomplete.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default InputAutocomplete;