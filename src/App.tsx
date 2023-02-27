import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CoffeeCartContextProvider } from "./contexts/useCoffees"
import { Router } from "./Router"

import { GlobalStyle } from "./styles/globals"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCartContextProvider>
          <Router/>
        </CoffeeCartContextProvider>
      </BrowserRouter>
      
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App