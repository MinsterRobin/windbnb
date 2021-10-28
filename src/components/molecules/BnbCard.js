import React from "react";
import styled, {useTheme} from 'styled-components';
import PropTypes from 'prop-types';
import {P} from "../atoms/Typography";
import Container from "../atoms/Container";
import SuperHostIndicator from "../atoms/SuperHostIndicator";
import BnbRating from "../atoms/BnbRating";
import {lighten} from "polished";
import Separator from "../atoms/Separator";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
    max-width: 400px;
`;

const BnbPhoto = styled.div`
    position: relative;
    :before {
        display: block;
        content: "";
        width: 100%;
        padding-top: calc((50/73) * 100%);
    }
    img {
        position: absolute;
        border-radius: 24px;
        top: 0;
        right: 0;
        background-color: ${props => props.theme.primary.normal};
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const BnbCard = ({imgSrc, title, type, rating, isSuperhost}) => {
    const theme = useTheme();
    return(
        <Layout>
            <BnbPhoto><img src={imgSrc} alt={"Bnb"}/></BnbPhoto>
            <Separator height={"10px"}/>
            <Container flex vertical justify={"flex-start"}>
                <Container flex align={"center"} justify={"space-between"}>
                    <Container flex align={"center"}>
                        {isSuperhost &&
                            [<SuperHostIndicator/>,
                            <Separator width={"10px"}/>]
                        }
                        <P family={"primary"} size={"small"} mobileSize={"very_small"} weight={"500"} color={lighten(0.3,theme.default.normal)} noWrapEllipsis data={"sdfsdf"}>{type}</P>
                    </Container>
                    <BnbRating rating={rating}/>
                </Container>
                <Separator height={"10px"}/>
                <P size={"regular"} mobileSize={"small"} weight={"600"} family={"primary"} color={theme.default.normal}>{title}</P>
            </Container>
        </Layout>
    );
};

BnbCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isSuperhost: PropTypes.bool
};

export default BnbCard;