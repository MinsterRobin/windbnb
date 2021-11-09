import React, {useState} from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import {P} from "../atoms/Typography";
import {ReactComponent as SearchIcon} from "../../data/assets/Search.svg";
import Hr from "../atoms/Hr";
import {lighten} from "polished";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Separator from "../atoms/Separator";
import InputAutocomplete from "../molecules/InputAutocomplete";
import Input from "../molecules/Input";

const Layout = styled.div`
    z-index: 1;
    display: flex;
    max-width: ${props => props.isOpen ? "100%" : "340px"};
    width: 100%;
    height: 100%;
    align-items: stretch;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    transition: all 500ms ease-in-out;
    overflow: hidden;
    
    .input1 {
        border-radius: 16px 0 0 16px;
        background-color: red;
    }
`;

const Test = styled.div`
    display: flex;
    width: 100%;
    min-width: 0;
    flex: 1;
`;

const SearchBar = () => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);
    const options = ["patates", "pomme de terre"];

    const handleTextInputChange = (e) => {
        setInput1(e.currentTarget.value);
        if (options.length && e.currentTarget.value.length ) {
            setFilteredOptions(options.filter((option) =>
                option.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1)
            );
        } else if (!e.currentTarget.value.length) {
            setFilteredOptions([]);
        }
    };
    //
    // const handleOptionClick = (option) => {
    //     setFilteredOptions([]);
    //     setValue(option);
    // };

    return(
        <Layout isOpen={isOpen}>
            <Container flex flexSize={1} height={"auto"} onClick={() => setIsOpen(!isOpen)}>
                <Input label={"LOCATION"} placeholder={"Add location"} onChange={handleTextInputChange} value={input1} />
            </Container>

            <Hr color={lighten(0.75, theme.default.normal)} height={"auto"} width={"1px"}/>

            <Container flex flexSize={1}>
                <Button as={"button"} flex={1} padding={"12px 16px"}>
                    <Container flex vertical align={"flex-start"} overflow={"hidden"}>
                        <P size={"tiny"} weight={"800"} family={"secondary"}>GUESTS</P>
                        <P size={"small"} weight={"400"} family={"secondary"} noWrapEllipsis>Add guests</P>
                    </Container>
                </Button>
            </Container>

            <Hr color={lighten(0.75, theme.default.normal)} height={"auto"} width={"1px"}/>

            <Button
                as={"button"}
                flex={0.2}
                padding={"12px 16px"}
                backgroundColor={isOpen ? theme.primary : ""}
                radius={"0 16px 16px 0"}>
                <Container flex align={"center"} justify={"center"}>
                    <SearchIcon fill={!isOpen ? theme.primary : theme.background}/>
                    {isOpen && <Separator width={"10px"}/>}
                    {isOpen && <P size={"small"} weight={"700"} family={"secondary"} color={theme.background} noWrapEllipsis>Search</P>}
                </Container>
            </Button>
        </Layout>
    );
};

export default SearchBar;