import React ,{Component} from 'react';
import 'tachyons';
import './App.css';
import './components/fonts.css';
import Docs from './components/Docs/Docs.jsx';
import Signin from './components/Signin/Signin';

class App extends Component {
  render() {
    return(
      <Docs />
      // <Signin />
    )
  }
}

export default App;
