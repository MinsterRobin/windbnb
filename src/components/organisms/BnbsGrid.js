import React, {Fragment} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BnbCard from "../molecules/BnbCard";
import Container from "../atoms/Container";
import {P} from "../atoms/Typography";
import Separator from "../atoms/Separator";

const GridLayout = styled.div`
    display: grid;
    grid-template: auto / repeat(4,1fr);
    grid-gap: 50px 30px;
    
    @media (max-width: 1024px) {
        grid-template: auto / repeat(3,1fr);
    }
    
    @media (max-width: 768px) {
        grid-template: auto / repeat(2,1fr);
        grid-gap: 40px 20px;
    }
    
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;

const BnbsGrid = ({bnbs}) => {
    return(
        <Container flex vertical>
            <Container flex align={"center"} justify={"space-between"}>
                <P size={"large"} mobileSize={"medium"} weight={"700"} family={"primary"}>Stays in Finland</P>
                <Separator width={"10px"}/>
                <P size={"small"} weight={"500"} family={"primary"}>{bnbs.length + " stays"}</P>
            </Container>
            <Separator height={"32px"}/>
            <GridLayout>
                {bnbs.map((bnb, index) =>
                    <BnbCard key={index} isSuperhost={bnb.superHost && true} rating={bnb.rating} type={bnb.type} title={bnb.title} imgSrc={bnb.photo} />
                )};
            </GridLayout>
        </Container>
    );
};

BnbsGrid.propTypes = {
    bnbs: PropTypes.array.isRequired,
};

export default BnbsGrid;