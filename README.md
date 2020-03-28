# Mock Design System
A sample design system / component library architecture built with React and StyledComponents. 

## Building the library
Build the library using webpack cli or npm command.
```bash 
npm i
npm run build
``` 
Sometimes you may need additional global npm packages. Install as advised by npm.


## Usage
To use this component library, the following are the best practices:

### ThemeProvider
Always wrap the entire application in the ThemeProvider provided by the library.
```js
//app.js

import {Button,ThemeProvider} from "mock-design-system/dist";
function App() {
    const theme = {
        primaryColor: "red"
    };

    // Without user provided theme
    return (
        <ThemeProvider>
            <Button>My button</Button>
        </ThemeProvider>
    );

    // With user provided theme
    return (
        <ThemeProvider>
            <Button>My button</Button>
        </ThemeProvider>
    );

}
```
This theme provider has defaults that are essential to the proper functioning of the library including
fonts, reset etc. The user is always able to the provide his own theme options via the theme object.

### Imports
This mock-design-system is optimized with code-splitting. All components can be imported as follows:
```js
// Without code splitting - imports the index file with all components and deconstructs
import {Button,ThemeProvider} from "mock-design-system/dist";

// With code splitting - imports only a single component and only its  dependencies
import Button from "mock-design-system/dist/Button";
import Icon from "mock-design-system/dist/Icon"
```

## Local Development
In order to use this component library in another React project and simultaneously develop on it, 
you will need to do the following:

Make sure both your-react-app and mock-design-system are using the node same version. npm link
puts the global symlink in the global node_modules folder of the specific node version so they need
to be the same to work.

Step 1: Add the following option to the webpack.config.js of your-react-app.
Because both the library and your react app use react as a dependency, sometimes there might be an
issue resolving which version of react to use. This option fixes the issue. This may sometimes also be
caused by styled-components. The fix is to do the same and alias styled-components.

```js
{
    resolve: {
        alias: {
            react: path.resolve(__dirname,'node_modules/react')
        }
    } 
}
```

Step 2: Create global symlink to the mock-design-system
```bash 
cd ~/path/to/mock-design-system
npm link
``` 

Step 2: Link the global symlink to your-react-app
```bash 
cd ~/path/to/your-react-app
npm link mock-design-system
``` 

[How to use npm-link](https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557)

## Code Splitting
In order to export individual components and enable code splitting,
extend the entry.js file in the configure folder as follows:

```js
//entry.js 

const path = require("path");
module.exports = {
    index: path.resolve(__dirname,"../src/index.js"),
    Button: path.resolve(__dirname,"../src/components/Button.js"),
    Icon: path.resolve(__dirname,"../src/components/Icon.js"),
    ThemeProvider: path.resolve(__dirname,"../src/ThemeProvider.js")
    // YourNewComponent: path.resolve(__dirname,"../src/path/to/YourComponent.js")
};
```

Don't forget to add your component to the exports from the index file as well

```js
//index.js

export ThemeProvider from './ThemeProvider';
export Button from './components/Button';
export Icon from './components/Icon';
```




