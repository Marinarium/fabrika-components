
import React from 'react'
import Content  from './containers/Content'
import Footer  from './containers/Footer'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
            <Content />
            <Footer />
    </BrowserRouter>
  )
}

export default App;