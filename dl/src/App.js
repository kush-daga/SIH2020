import React ,{Component} from 'react';
import "tachyons";
import "./App.css";
import "./components/fonts.css";
import Docs from "./components/Docs/Docs.jsx";
import Signup from "./components/Signup/Signup";
import PMain from "./components/PMain/PMain";

class App extends Component {
  render() {
    return(
      // <Docs />
      // <Signup />
       <PMain />
     
    )
  }
}

export default App;
//We have created two components: Docs, Signup , now we need to create main dashboard
