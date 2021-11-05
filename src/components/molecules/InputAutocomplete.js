import React, {useState} from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import {P} from "../atoms/Typography";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
`;

const Input = styled.input`
    
`;

const InputAutocomplete = ({autocomplete, onChange}) => {
    const [value, setValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);
    const theme = useTheme();

    const handleChange = (e) => {
        setValue(e.currentTarget.value);
        if (autocomplete.length && e.currentTarget.value.length ) {
            setFilteredOptions(autocomplete.filter((option) =>
                option.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1)
            );
        } else if (!e.currentTarget.value.length) {
            setFilteredOptions([]);
        }
    };

    const handleOptionClick = (option) => {
        setFilteredOptions([]);
        setValue([option]);
    };

    return(
        <Layout>
            <InputLayout>
                <P size={"tiny"} weight={"800"} family={"secondary"}>LOCATION</P>
                <Button
                    type="text"
                    flex={1}
                    backgroundColor={theme.background}
                    onChange={handleChange}
                    value={value}
                />
            </InputLayout>

                <Container flex vertical width={"100%"}>
            {filteredOptions.map((option, index) =>
                <p key={index} onClick={() => handleOptionClick(option)}>{option}</p>
            )}
                </Container>
        </Layout>
    );
};

InputAutocomplete.propTypes = {
    autocomplete: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default InputAutocomplete;