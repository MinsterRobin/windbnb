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
import Location from "../atoms/Location";
import {useDispatch, useSelector} from "react-redux";
import {selectNavbarIsOpen} from "../../slices/sliceNavbar";
import {setIsOpen} from "../../slices/sliceNavbar";
import {filterBnbs} from "../../slices/sliceBnbs";
import bnbs from "../../data/stays"

const Layout = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    max-width: ${props => props.isNavbarOpen ? "100%" : "450px"};
    width: 100%;
    transition: all 500ms ease-in-out;
    height: ${props => props.isNavbarOpen && "300px"};
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

const SearchBar = () => {
    const theme = useTheme();

    const [input1, setInput1] = useState("");
    const [location, setLocation] = useState({city: "", country: ""});
    const [input2, setInput2] = useState(0);

    let options = bnbs.map(bnb => {return {
        city: bnb.city,
        country: bnb.country
    }});
    options = options.filter((option, index, self) => index === self.findIndex(e => e.city === option.city));

    const [filteredOptions, setFilteredOptions] = useState(options);

    const [amountAdults, setAmountAdults] = useState(0);
    const [amountChildren, setAmountChildren] = useState(0);
    const [isLocationInputOpen, setIsLocationInputOpen] = useState(false);
    const [isGuestsInputOpen, setIsGuestInputOpen] = useState(false);
    const isNavbarOpen = useSelector(selectNavbarIsOpen);

    const dispatch = useDispatch();

    const handleTextInputChange = (e) => {
        setInput1(e.currentTarget.value);
        setLocation({city: "", country: ""});
        setFilteredOptions(options.filter((option) => {
            let stringOption = option.city + ", " + option.country;
            return (stringOption.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1);
        }));
    };

    const handleOptionClick = (option) => {
        setFilteredOptions([]);
        setLocation(option);
        setInput1(option.city + ", " + option.country);
    };

    useEffect(() => {
        setInput2(amountAdults + amountChildren);
    },[amountAdults, amountChildren]);

    return(
        <React.Fragment>
            {isNavbarOpen &&
            <MobileSearchLayout isNavbarOpen={isNavbarOpen}>
                <P size={"very_small"} weight={"700"} family={"secondary"}>Edit your search</P>

                <Separator height={"24px"} />

                <MobileBarContainer>
                    <Container
                        flex
                        height={"auto"}
                        onClick={() => {
                            dispatch(setIsOpen(true));
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
                            dispatch(setIsOpen(true));
                            dispatch(filterBnbs({location: location, guests: input2}));
                            setIsLocationInputOpen(false);
                            setIsGuestInputOpen(true);
                        }}>
                        <Container flex vertical align={"flex-start"} overflow={"hidden"}>
                            <P size={"tiny"} weight={"800"} family={"secondary"}>GUESTS</P>
                            <P size={"small"} weight={"400"} family={"secondary"} color={input2 === 0 ? theme.default.lighten3 : theme.default.normal} noWrapEllipsis>{input2 === 0 ? "Add guests" : input2 + " guests"}</P>
                        </Container>
                    </Button>
                </MobileBarContainer>

                <Separator height={"24px"}/>

                <Container flex flexSize={1} width={"100%"} overflow={"hidden"}>
                    {isLocationInputOpen &&
                    <Container flex flexSize={1} vertical padding={"20px 16px"} gap={"30px"}>
                        {filteredOptions.map((option, index) =>
                            <Location key={index} onClick={() => handleOptionClick(option)}>{option.city + ", " + option.country}</Location>
                        )}
                    </Container>}

                    {isGuestsInputOpen &&
                    <Container flex flexSize={1} vertical padding={"20px 16px"}>
                        <ItemAmountPicker amount={amountAdults} setAmount={setAmountAdults} title={"Adults"} description={"Ages 13 or above"}/>
                        <Separator width={"100%"} height={"30px"}/>
                        <ItemAmountPicker amount={amountChildren} setAmount={setAmountChildren} title={"Children"} description={"Ages 2-12"}/>
                    </Container>}
                </Container>

                <Separator height={"72px"}/>

                <Container flex maxWidth={"126px"} width={"100%"} height={"48px"} alignSelf={"center"}>
                    <Button
                        as={"button"}
                        backgroundColor={isNavbarOpen ? theme.primary : ""}
                        radius={"16px"}
                        onClick={() => {
                            dispatch(setIsOpen(false));
                            dispatch(filterBnbs({location: location, guests: input2}));
                            setIsGuestInputOpen(false);
                            setIsLocationInputOpen(false);
                        }}
                    >
                        <Container flex align={"center"} justify={"center"} height={"100%"}>
                            <SearchIcon fill={!isNavbarOpen ? theme.primary : theme.background}/>
                            {isNavbarOpen && <Separator width={"10px"}/>}
                            {isNavbarOpen && <P size={"small"} weight={"700"} family={"secondary"} color={theme.background} noWrapEllipsis>Search</P>}
                        </Container>
                    </Button>
                </Container>

            </MobileSearchLayout>
            }
            <Layout isNavbarOpen={isNavbarOpen}>
                <LayoutBar>

                    <Container
                        flex
                        height={"auto"}
                        onClick={() => {
                            dispatch(setIsOpen(true));
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
                            dispatch(setIsOpen(true));
                            setIsLocationInputOpen(false);
                            setIsGuestInputOpen(true);
                        }}>
                        <Container flex vertical align={"flex-start"} overflow={"hidden"}>
                            <P size={"tiny"} weight={"800"} family={"secondary"}>GUESTS</P>
                            <P size={"small"} weight={"400"} family={"secondary"} color={input2 === 0 ? theme.default.lighten3 : theme.default.normal} noWrapEllipsis>{input2 === 0 ? "Add guests" : input2 + " guests"}</P>
                        </Container>
                    </Button>

                    <Hr color={lighten(0.75, theme.default.normal)} height={"auto"}/>

                    <Button
                        as={"button"}
                        backgroundColor={isNavbarOpen ? theme.primary : ""}
                        radius={"0 16px 16px 0"}
                        onClick={() => {
                            dispatch(setIsOpen(false));
                            dispatch(filterBnbs({location: location, guests: input2}));
                            setIsGuestInputOpen(false);
                            setIsLocationInputOpen(false);
                        }}
                        >
                        <Container flex align={"center"} justify={"center"} height={"100%"}>
                            <SearchIcon fill={!isNavbarOpen ? theme.primary : theme.background}/>
                            {isNavbarOpen && <Separator width={"10px"}/>}
                            {isNavbarOpen && <P size={"small"} weight={"700"} family={"secondary"} color={theme.background} noWrapEllipsis>Search</P>}
                        </Container>
                    </Button>
                </LayoutBar>

                {isNavbarOpen &&
                <LayoutSelectors>
                    {isLocationInputOpen &&
                    <Container flex flexSize={1} vertical padding={"20px 16px"} gap={"30px"}>
                        {filteredOptions.map((option, index) =>
                            <Location key={index} onClick={() => handleOptionClick(option)}>{option.city + ", " + option.country}</Location>
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