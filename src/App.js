import React, { Component } from 'react';

import Anime from './components/animeList';
import Details from './components/animeDetails';
import { Route, Routes,Navigate } from "react-router-dom";


import './App.css';

class App extends Component {
  render() { 
    return (
      <div className='App'>
      
<Routes>
<Route path='/home' element={<Anime />}/>
     <Route path='/details' element={<Details/>}/>
     <Route
        path="*"
        element={<Navigate to="/home" />}
    />
     
      </Routes>
      </div>

    
    );}
}
 
export default App;