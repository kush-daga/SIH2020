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
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";

class App extends Component {

  constructor() {
    super();
    this.state = {
      route:'docs',
    }
  }






  render() {
    return(
      <div className="flex flex-row">
         <div className="Left flex flex-column" style={{width:"20%"}}>
                <ul>
                    <Li style={{fontSize:"x-large",fontWeight:"bold"}}>
                        docLedger
                    </Li>
                    <Li>
                        Home
                    </Li>
                    <Li style={{backgroundColor:"rgba(128,6,6,0.65)", color:"#fff2f2",borderRadius:"55px"}}>
                        Dashboard
                    </Li>
                    <Li>
                        Find Doctors
                    </Li>
                    <Li>
                        Add Record
                    </Li>
                    <Li>
                        View Records
                    </Li>
                    <Li>
                        Chat
                    </Li>
                </ul>
            </div>
            <Right>
                <Dashboard />
            </Right>
      </div>

      
    )
  }
}

export default App;
//We have created two components: Docs, Signup , now we need to create main dashboard
const Left = styled.div`
  display:flex;
`;
const Right = styled.div`
display: flex;
`;
const Li = styled.li`
  height:2.75em;
  text-align:inherit;
`;