import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


const styles = {
  global: (props) => ({
    body: {
      // color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      color: mode('gray.800', 'white')(props),
      bg: mode('gray.100', '#101010')(props),
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}


const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  }
}

const theme = extendTheme({ colors, config, styles })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>

  </React.StrictMode>,
)