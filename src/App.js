import React, { useContext } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { I18nContext } from './i18n'
import LanguageOptions from './Components/Language/LanguageOptions'
import Navigation from './Components/Navigation/Navigation'
import Artists from './Components/Artists/Artists'
import About from './Components/About/About'
import Copyright from './Components/Copyright/Copyright'
import styled from 'styled-components'

const PalacioWrapper = styled.div`
  position: relative;
`

function App() {
  const { translate } = useContext(I18nContext)

  return (
    <Router>
      <Navigation />
      <LanguageOptions />
      <Route path="/artists" component={ Artists } />
      <Route path="/about" component={ About } />
      <Route exact path="/" component={ Copyright } />
    </Router>
  );
}

export default App;
