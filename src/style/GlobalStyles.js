import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;

    font-family: 'Oswald', sans-serif;
    font-weight: 400;

    font-size: 20px
  }
`

export default GlobalStyle