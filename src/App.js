import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {THEMES} from "./styles/themes";
import Windbnb from "./pages/Windbnb";

function App() {
    return (
        <ThemeProvider theme={THEMES[0]}>
            <GlobalStyles theme={THEMES[0]}/>
            <Windbnb/>
        </ThemeProvider>
    );
}

export default App;
