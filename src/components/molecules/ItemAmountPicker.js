import React from "react";
import {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import Container from "../atoms/Container";
import {P} from "../atoms/Typography";
import Separator from "../atoms/Separator";
import Button from "../atoms/Button";
import {lighten} from "polished";

const ItemAmountPicker = ({title, description, amount, setAmount}) => {
    const theme = useTheme();

    const handleCounter = (value) => {
        if (amount + value >= 0) {
            setAmount(amount + value);
        }
    };

    return(
        <Container flex vertical justify={"center"} align={"flex-start"} width={"max-content"}>
            <P size={"small"} weight={"700"} family={"secondary"} color={theme.default.normal}>{title}</P>
            <P size={"small"} weight={"400"} family={"secondary"} color={lighten(0.6,theme.default.normal)}>{description}</P>

            <Separator height={"12px"}/>
            
            <Container flex justify={"flex-start"} align={"center"}>

                <Button
                    as={"button"}
                    onClick={() => handleCounter(-1)}
                    border={{size: "1px", color: lighten(0.3,theme.default.normal)}}
                    radius={"4px"}>
                    <Container flex align={"center"} justify={"center"} width={"21px"} height={"21px"}>
                        <P size={"small"} weight={"600"} family={"primary"} color={lighten(0.3,theme.default.normal)}>-</P>
                    </Container>
                </Button>

                <Separator width={"16px"}/>
                <P size={"small"} weight={"700"} family={"secondary"} color={theme.default.normal}>{amount}</P>
                <Separator width={"16px"}/>

                <Button
                    as={"button"}
                    onClick={() => handleCounter(1)}
                    border={{size: "1px", color: lighten(0.3,theme.default.normal)}}
                    radius={"4px"}>
                    <Container flex align={"center"} justify={"center"} width={"20px"} height={"20px"}>
                        <P size={"small"} weight={"600"} family={"primary"} color={lighten(0.3,theme.default.normal)}>+</P>
                    </Container>
                </Button>

            </Container>
        </Container>
    )
};

ItemAmountPicker.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number.isRequired,
    setAmount: PropTypes.func.isRequired
};

export default ItemAmountPicker;