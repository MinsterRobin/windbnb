import React, {useState} from "react";
import TemplateWindbnb from "../components/templates/TemplateWindbnb";
import Container from "../components/atoms/Container";
import BnbsGrid from "../components/organisms/BnbsGrid";
import bnbs from "../data/stays"
import SearchBar from "../components/molecules/SearchBar";
import Navbar from "../components/organisms/Navbar";
import ItemAmountPicker from "../components/molecules/ItemAmountPicker";
import SearchModulde from "../components/organisms/SearchModule";
import InputAutocomplete from "../components/molecules/InputAutocomplete";

const Windbnb = () => {
    const [amount, setAmount] = useState(0);
    const [inputAutocompleteChange, setInputAutocompleteChange] = useState("");
    return (
        <TemplateWindbnb>
            <Navbar/>
            <InputAutocomplete onChange={setInputAutocompleteChange} autocomplete={["Patate", "Pomme de terre", "Papa"]}/>
            {/*<SearchModulde/>*/}
            <ItemAmountPicker title={"Adults"} description={"Ages 13 or above"} amount={amount} setAmount={setAmount} />
            <Container>
                <BnbsGrid bnbs={bnbs}/>
            </Container>
        </TemplateWindbnb>
    );
};

export default Windbnb;