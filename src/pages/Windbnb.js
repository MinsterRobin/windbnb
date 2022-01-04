import React from "react";
import TemplateWindbnb from "../components/templates/TemplateWindbnb";
import BnbsGrid from "../components/organisms/BnbsGrid";
import bnbs from "../data/stays"
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import {useSelector} from "react-redux";
import {selectFilteredBnbs} from "../slices/sliceBnbs";


const Windbnb = () => {
    const filteredBnbs = useSelector(selectFilteredBnbs);

    return (
        <React.Fragment>
            <TemplateWindbnb Navbar={Navbar} Footer={Footer}>
                <BnbsGrid bnbs={filteredBnbs}/>
            </TemplateWindbnb>
        </React.Fragment>
    );
};

export default Windbnb;