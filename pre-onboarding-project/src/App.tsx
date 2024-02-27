import reset from 'styled-reset';
import List from './components/List';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

${reset}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3c3c3c;
}

`;
function App() {
  return (
    <>
      <GlobalStyle />
      <List />
    </>
  );
}

export default App;
