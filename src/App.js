import React, { useEffect ,useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from './Components/Navigation/Navigation'
import Artists from './Components/Artists/Artists'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import firebase from './firebase'
import Catalogue from './Components/Catalogue/Catalogue'
import Exhibitions from './Components/Exhibitions/Exhibitions'
import CurrentExhibition from './Components/CurrentExhibition'
import Terms from './Components/TermsAndPrivacy/Terms'
import Privacy from './Components/TermsAndPrivacy/Privacy'
import Banner from './Components/Banner'

function App( props ) {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
	})

  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={ Banner } />
      <Route exact path="/home" component={ CurrentExhibition } />
      <Route path="/artists" component={ Artists } />
      <Route path="/about" component={ About } />
      <Route path="/online-viewing-room" component={ Catalogue } />
      <Route path="/exhibitions" component={ Exhibitions } />
      <Route path="/terms-and-conditions" component={ Terms } />
      <Route path="/privacy" component={ Privacy } />
    </Router>
  );
}

export default App;
