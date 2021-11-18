import React from "react";
import TemplateWindbnb from "../components/templates/TemplateWindbnb";
import Container from "../components/atoms/Container";
import BnbsGrid from "../components/organisms/BnbsGrid";
import bnbs from "../data/stays"
import Navbar from "../components/organisms/Navbar";

const Windbnb = () => {
    return (
        <React.Fragment>
            <TemplateWindbnb Navbar={Navbar}>
                {/*<ItemAmountPicker title={"Adults"} description={"Ages 13 or above"} amount={amount} setAmount={setAmount} />*/}
                <Container>
                    <BnbsGrid bnbs={bnbs}/>
                </Container>
            </TemplateWindbnb>
        </React.Fragment>
    );
};

export default Windbnb;