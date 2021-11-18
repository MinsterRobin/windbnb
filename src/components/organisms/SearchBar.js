import React, {useState, useEffect} from "react";
import styled, {useTheme} from 'styled-components';
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
    z-index: 1;
    display: flex;
    flex-direction: column;
    max-width: ${props => props.isOpen ? "100%" : "450px"};
    width: 100%;
    transition: all 500ms ease-in-out;
    height: ${props => props.isOpen && "300px"};
`;

const LayoutBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 0.45fr;
    width: 100%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    transition: all 500ms ease-in-out;
    overflow: hidden;
`;

const LayoutSelectors = styled.div`
    flex: 1;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 0.45fr;
    width: 100%;
    height: 100%;    
`;

const Option = styled.div`
    
`;

const MobileSearchLayout = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    padding: 20px;
    background-color: white;
    height: 100vh;
    max-height: 630px;
    display: none;
    flex-direction: column;
    
    @media (max-width: 576px) {
        display: flex;
    }
`;

const MobileBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`;

const SearchBar = ({setIsOpen, isOpen}) => {
    const theme = useTheme();
    // const [isOpen, setIsOpen] = useState(false);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState(0);
    const options = ["patates", "pomme de terre", "blabla", "OK", "Pas d'idées", "Juste","test","yes","letsgo"];
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [amountAdults, setAmountAdults] = useState(0);
    const [amountChildren, setAmountChildren] = useState(0);
    const [isLocationInputOpen, setIsLocationInputOpen] = useState(false);
    const [isGuestsInputOpen, setIsGuestInputOpen] = useState(false);

    const handleTextInputChange = (e) => {
        setInput1(e.currentTarget.value);
        setFilteredOptions(options.filter((option) =>
            option.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1)
        );
    };

    const handleOptionClick = (option) => {
        setFilteredOptions([]);
        setInput1(option);
    };

    useEffect(() => {
        setInput2(amountAdults + amountChildren);
    },[amountAdults, amountChildren]);

    return(
        <React.Fragment>
            {isOpen &&
            <MobileSearchLayout isOpen={isOpen}>
                <P size={"very_small"} weight={"700"} family={"secondary"}>Edit your search</P>
                <Separator height={"24px"} />
                <MobileBarContainer>
                    <Container
                        flex
                        height={"auto"}
                        onClick={() => {
                            setIsOpen(true);
                            setIsLocationInputOpen(true);
                            setIsGuestInputOpen(false);
                        }}
                        backgroundColor={theme.background}>
                        <Input label={"LOCATION"} placeholder={"Add location"} onChange={handleTextInputChange} value={input1} />
                    </Container>

                    <Hr color={lighten(0.75, theme.default.normal)} height={"1px"}/>

                    <Button
                        as={"button"}
                        flex={1}
                        padding={"12px 16px"}
                        backgroundColor={theme.background}
                        onClick={() => {
                            setIsOpen(true);
                            setIsLocationInputOpen(false);
                            setIsGuestInputOpen(true);
                        }}>
                        <Container flex vertical align={"flex-start"} overflow={"hidden"}>
                            <P size={"tiny"} weight={"800"} family={"secondary"}>GUESTS</P>
                            <P size={"small"} weight={"400"} family={"secondary"} noWrapEllipsis>{input2 === 0 ? "Add guests" : input2 + " guests"}</P>
                        </Container>
                    </Button>
                </MobileBarContainer>

                <Container flex flexSize={1} width={"100%"} overflow={"hidden"}>
                    {isLocationInputOpen &&
                    <Container flex flexSize={1} vertical padding={"20px 16px"} gap={"30px"}>
                        {filteredOptions.map((option, index) =>
                            <Option key={index}>
                                <P size={"small"} weight={"400"} family={"secondary"} key={index} onClick={() => handleOptionClick(option)}>{option}</P>
                            </Option>
                        )}
                    </Container>}

                    {isGuestsInputOpen &&
                    <Container flex flexSize={1} vertical padding={"20px 16px"}>
                        <ItemAmountPicker amount={amountAdults} setAmount={setAmountAdults} title={"Adults"} description={"Ages 13 or above"}/>
                        <Separator width={"100%"} height={"30px"}/>
                        <ItemAmountPicker amount={amountChildren} setAmount={setAmountChildren} title={"Children"} description={"Ages 2-12"}/>
                    </Container>}
                </Container>

                <Button
                    as={"button"}
                    backgroundColor={isOpen ? theme.primary : ""}
                    radius={"16px"}
                    onClick={() => {
                        setIsOpen(false);
                        setIsGuestInputOpen(false);
                        setIsLocationInputOpen(false);
                    }}
                >
                    <Container flex align={"center"} justify={"center"} height={"100%"}>
                        <SearchIcon fill={!isOpen ? theme.primary : theme.background}/>
                        {isOpen && <Separator width={"10px"}/>}
                        {isOpen && <P size={"small"} weight={"700"} family={"secondary"} color={theme.background} noWrapEllipsis>Search</P>}
                    </Container>
                </Button>

            </MobileSearchLayout>
            }
            <Layout isOpen={isOpen}>
                <LayoutBar isOpen={isOpen}>

                    <Container
                        flex
                        height={"auto"}
                        onClick={() => {
                            setIsOpen(true);
                            setIsLocationInputOpen(true);
                            setIsGuestInputOpen(false);
                        }}
                        backgroundColor={theme.background}>
                        <Input label={"LOCATION"} placeholder={"Add location"} onChange={handleTextInputChange} value={input1} />
                    </Container>

                    <Hr color={lighten(0.75, theme.default.normal)} height={"auto"}/>

                    <Button
                        as={"button"}
                        padding={"12px 16px"}
                        backgroundColor={theme.background}
                        onClick={() => {
                            setIsOpen(true);
                            setIsLocationInputOpen(false);
                            setIsGuestInputOpen(true);
                        }}>
                        <Container flex vertical align={"flex-start"} overflow={"hidden"}>
                            <P size={"tiny"} weight={"800"} family={"secondary"}>GUESTS</P>
                            <P size={"small"} weight={"400"} family={"secondary"} noWrapEllipsis>{input2 === 0 ? "Add guests" : input2 + " guests"}</P>
                        </Container>
                    </Button>


                    <Hr color={lighten(0.75, theme.default.normal)} height={"auto"}/>

                    <Button
                        as={"button"}
                        backgroundColor={isOpen ? theme.primary : ""}
                        radius={"0 16px 16px 0"}
                        onClick={() => {
                            setIsOpen(false);
                            setIsGuestInputOpen(false);
                            setIsLocationInputOpen(false);
                        }}
                        >
                        <Container flex align={"center"} justify={"center"} height={"100%"}>
                            <SearchIcon fill={!isOpen ? theme.primary : theme.background}/>
                            {isOpen && <Separator width={"10px"}/>}
                            {isOpen && <P size={"small"} weight={"700"} family={"secondary"} color={theme.background} noWrapEllipsis>Search</P>}
                        </Container>
                    </Button>
                </LayoutBar>

                {isOpen &&
                <LayoutSelectors>
                    {isLocationInputOpen &&
                    <Container flex flexSize={1} vertical padding={"20px 16px"} gap={"30px"}>
                        {filteredOptions.map((option, index) =>
                            <Option key={index}>
                                <P size={"small"} weight={"400"} family={"secondary"} key={index} onClick={() => handleOptionClick(option)}>{option}</P>
                            </Option>
                        )}
                    </Container>}

                    <Separator/>

                    {isGuestsInputOpen &&
                    <Container flex flexSize={1} vertical padding={"20px 16px"}>
                        <ItemAmountPicker amount={amountAdults} setAmount={setAmountAdults} title={"Adults"} description={"Ages 13 or above"}/>
                        <Separator width={"100%"} height={"30px"}/>
                        <ItemAmountPicker amount={amountChildren} setAmount={setAmountChildren} title={"Children"} description={"Ages 2-12"}/>
                    </Container>}
                </LayoutSelectors>}
            </Layout>

        </React.Fragment>
    );
};

export default SearchBar;