import React, {useState} from "react";
import TemplateWindbnb from "../components/templates/TemplateWindbnb";
import Container from "../components/atoms/Container";
import BnbsGrid from "../components/organisms/BnbsGrid";
import bnbs from "../data/stays"
import SearchBarOld from "../components/molecules/SearchBarOld";
import Navbar from "../components/organisms/Navbar";
import ItemAmountPicker from "../components/molecules/ItemAmountPicker";
import SearchModulde from "../components/organisms/SearchModule";
import InputAutocomplete from "../components/molecules/InputAutocomplete";

const Windbnb = () => {
    const [amount, setAmount] = useState(0);
    const [inputAutocompleteChange, setInputAutocompleteChange] = useState("");
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