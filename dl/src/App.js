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
import DocMain from "./components/DocMain/DocMain";

class App extends Component {

  constructor() {
    super();
    this.state = {
      route:'docs',
    }
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
    // send the request
    xhr.send()
  }




  onRouteChange = (route) => {
    if(route==='signout') {
      this.setState({isSignedIn:'false'});
    } else if(route==='docs'){
      this.setState({isSignedIn:'true'});
    }
    this.setState( {route:route} );
  }

  onButtonSubmit = () => {
    console.log("This is the doctor's id:1234 ")
  }


  render() {
    const { route }=this.state;
    return(
      // <Dashboard />
      // <Signup />
      // <Docs />  
      <AddRecord />
      // <Form />

      
    )
  }
}

export default App;
//We have created two components: Docs, Signup , now we need to create main dashboard
