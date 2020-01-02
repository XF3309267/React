
import React, { Component ,  } from 'react'
// import logo from './logo.svg';

import  {
    // CountProvider,
    CountBtn,
    Counter,
} from './Components'

class App extends Component {
  render(){
      return(
          <>
              <CountBtn type='incr'> + </CountBtn>
                  <Counter>

                  </Counter>
              <CountBtn type='derc'> - </CountBtn>
          </>
      )
  }
}


export default App;
