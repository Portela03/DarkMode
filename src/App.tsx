
import './App.css'
import Header from './components/Header'
import GlobalStyles from './styles/global'
import {ThemeProvider} from 'styled-components'
import light from './styles/theme/light'

function App() {
 

  return (
    
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <Header/>
     </ThemeProvider>
      
       
    
  );
}

export default App
