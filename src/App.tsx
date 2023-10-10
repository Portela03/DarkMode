
import './App.css'
import  {useState} from 'react'
import dark from './styles/theme/light'
import Header from './components/Header'
import GlobalStyles from './styles/global'
import {ThemeProvider} from 'styled-components'
import light from './styles/theme/light'



function App() {

 const [theme, setTheme] = useState(light);
  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark :light);
    
  }
  

  return (
    
    <ThemeProvider theme={light}>
      <div className='App'>
      <GlobalStyles/>
      <Header toggleTheme={toggleTheme}/>
      </div>
     </ThemeProvider>
      
       
    
  );
}

export default App
