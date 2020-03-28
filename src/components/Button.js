import React from "react";
import styled from "styled-components";

function Button(props) {
    return(<StyledButton>{props.children}</StyledButton>);
}

const StyledButton = styled.button`
    font-family: ${props => props.theme.__COMPONENT_LIB_NAMESPACE__DO_NOT_TOUCH_OR_YOU_WILL_BE_FIRED__.primaryFont};
    width: 100px;
    height: 40px;
    border: 1px solid blue;
    background: ${props => props.theme.__COMPONENT_LIB_NAMESPACE__DO_NOT_TOUCH_OR_YOU_WILL_BE_FIRED__.primaryColor};
`;

export default Button;
