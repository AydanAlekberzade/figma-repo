import React from 'react'
import FirstPart from './components/FirstPart'
import SecondPart from './components/SecondPart'
import NewPart from './components/NewPart'
import Wishlist from './components/Wishlist'
import { Route, Routes } from 'react-router-dom'
import ContactLogin from './components/ContactLogin'

const App = () => {
  return (
 <div className='App'>

<FirstPart />
<NewPart/>

<NewPart className='mx-5'/>
<Wishlist />
<ContactLogin />





 </div>


  )
}

export default App
