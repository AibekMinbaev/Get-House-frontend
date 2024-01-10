import "./App.css"
import React from 'react' 
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Properties from './components/Properties/Properties.js'
import Filter from './components/Filter/Filter.js'

function App() {
      return (
        <div className='main-wrapper'>
           <Header></Header>
           <Properties></Properties>
           <Footer></Footer>
        </div>
      )
}

export default App;
