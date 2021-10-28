import React from "react";
import TemplateWindbnb from "../components/templates/TemplateWindbnb";
import Container from "../components/atoms/Container";
import BnbsGrid from "../components/organisms/BnbsGrid";
import bnbs from "../data/stays"

const Windbnb = () => {
    return (
        <TemplateWindbnb>
            <Container>
                {/*<SuperHostIndicator/>*/}
                {/*<BnbType>Private room</BnbType>*/}
                {/*<P family={"primary"} size={"small"} mobileSize={"very_small"} weight={"500"} color={lighten(0.3,theme.default.normal)}>Private room</P>*/}
                {/*<BnbTitle>sdfsdf</BnbTitle>*/}
                {/*<P size={"regular"} mobileSize={"small"} weight={"600"} family={"primary"} color={theme.default.normal}>sdfsdf</P>*/}
                {/*<BnbRating rating={4.45}/>*/}
                {/*<BnbCard isSuperhost rating={4.5} type={"Appartment"} title={"Super appartement"} imgSrc={"https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"} />*/}
                <BnbsGrid bnbs={bnbs}/>
            </Container>
        </TemplateWindbnb>
    );
};

export default Windbnb;