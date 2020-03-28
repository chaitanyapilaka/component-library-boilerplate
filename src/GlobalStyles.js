import {createGlobalStyle} from 'styled-components';

// Fonts and Resets
import CircularStdBlackWoff from './static/fonts/CircularStd-Black.woff';
import CircularStdBlackWoff2 from './static/fonts/CircularStd-Black.woff2';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'CircularStd-Black';
        font-style: normal;
        font-weight: normal;
        src:
            url('${CircularStdBlackWoff2}') format('woff2'),
            url('${CircularStdBlackWoff}') format('woff');
    }
`;



export default GlobalStyles;