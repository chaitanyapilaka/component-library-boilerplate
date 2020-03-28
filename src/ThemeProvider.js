import React from "react";
import { ThemeProvider,createGlobalStyle } from 'styled-components';
import GlobalStyles from "./GlobalStyles";

const defaultTheme = {
    primaryFont: "CircularStd-Black",
    primaryColor: "blue"
};

const ComponentLibraryThemeProvider = (props) => {
  const theme = {
    __COMPONENT_LIB_NAMESPACE__DO_NOT_TOUCH_OR_YOU_WILL_BE_FIRED__: {...defaultTheme,...props.theme}
  };
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {props.children}
    </ThemeProvider>
  );
};

export default ComponentLibraryThemeProvider;

