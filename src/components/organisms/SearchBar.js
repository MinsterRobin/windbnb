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
import Input from "../molecules/Input";
import ItemAmountPicker from "../molecules/ItemAmountPicker";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all 500ms ease-in-out;
`;

const LayoutBar = styled.div`
    z-index: 1;
    display: grid;
    max-width: ${props => props.isOpen ? "100%" : "450px"};
    grid-template-columns: 1fr 1px 1fr 1px 0.2fr;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    transition: all 500ms ease-in-out;
    overflow: hidden;
`;

const LayoutSelectors = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 0.2fr;
    width: 100%;
    height: 100%;
    
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
    const [amountAdults, setAmountAdults] = useState(0);
    const [amountChildren, setAmountChildren] = useState(0);

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

    const handleOptionClick = (option) => {
        setFilteredOptions([]);
        setInput1(option);
    };

    return(
        <Layout>
            <LayoutBar isOpen={isOpen}>

                <Container flex flexSize={1} height={"auto"} onClick={() => setIsOpen(true)} backgroundColor={theme.background}>
                    <Input label={"LOCATION"} placeholder={"Add location"} onChange={handleTextInputChange} value={input1} />
                </Container>

                <Hr color={lighten(0.75, theme.default.normal)} height={"auto"}/>

                <Container flex flexSize={1}>
                    <Button as={"button"} flex={1} padding={"12px 16px"} backgroundColor={theme.background}>
                        <Container flex vertical align={"flex-start"} overflow={"hidden"}>
                            <P size={"tiny"} weight={"800"} family={"secondary"}>GUESTS</P>
                            <P size={"small"} weight={"400"} family={"secondary"} noWrapEllipsis>Add guests</P>
                        </Container>
                    </Button>
                </Container>

                <Hr color={lighten(0.75, theme.default.normal)} height={"auto"}/>

                <Button
                    as={"button"}
                    flex={0.2}

                    backgroundColor={isOpen ? theme.primary : ""}
                    radius={"0 16px 16px 0"}
                    onClick={() => setIsOpen(false)}
                    >
                    <Container flex align={"center"} justify={"center"}>
                        <SearchIcon fill={!isOpen ? theme.primary : theme.background}/>
                        {isOpen && <Separator width={"10px"}/>}
                        {isOpen && <P size={"small"} weight={"700"} family={"secondary"} color={theme.background} noWrapEllipsis>Search</P>}
                    </Container>
                </Button>
            </LayoutBar>

            {isOpen &&
                <LayoutSelectors>
                    <Container flex flexSize={1} vertical>
                        {filteredOptions.map((option, index) =>
                            <p key={index} onClick={() => handleOptionClick(option)}>{option}</p>
                        )}
                    </Container>
                    <Container flex flexSize={1} vertical>
                        <ItemAmountPicker amount={amountAdults} setAmount={setAmountAdults} title={"Adults"} description={"Ages 13 or above"}/>
                        <ItemAmountPicker amount={amountChildren} setAmount={setAmountChildren} title={"Children"} description={"Ages 2-12"}/>
                    </Container>
                </LayoutSelectors>
            }

        </Layout>
    );
};

export default SearchBar;