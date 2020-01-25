import React ,{Component} from 'react';
import "tachyons";
import "./App.css";
import "./components/fonts.css";
import Docs from "./components/Docs/Docs.jsx";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import AddRecord from "./components/AddRecord/AddRecord";
import FindDoctor from "./components/FindDoctor/FindDoctor";
import SymCheck from "./components/SymCheck/SymCheck";
import Form from "./components/DynamicForm/DynamicForm";

class App extends Component {

  constructor() {
    super();
    this.state = {
      route:'',
    }
  }


  render() {
    return(
      // <Docs />  
      // <Signup />
      //  <Dashboard />
      // <AddRecord />
      // <FindDoctor />
      // <SymCheck />
      <Form />
    )
  }
}

export default App;
//We have created two components: Docs, Signup , now we need to create main dashboard
