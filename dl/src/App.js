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
import Dash from "./components/Dashboard/Dash";
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
      <ContainerApp>
         <Left>
                <Ul>
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
                </Ul>
            </Left>
            <Right>
              <div className="flex flex-row" style={{backgroundImage:"linear-gradient(to right,#FD2E2E,#800606)",color:"white", height:"4em",justifyContent:"flex-start"}}>
                  <div style={{padding:"10px"}}>
                  <Icon></Icon>
                  <Icon></Icon>
                  <Icon></Icon>
                  </div>
                  <div style={{paddingTop:"0.5em"}}>
                    <input type="text" name="search" placeholder="Search something" style={{height:"2.5em",borderRadius:"50px",width:"19em"}} />
                  </div>
                

              </div>
                <Dash />
            </Right>
      </ContainerApp>

      
    )
  }
}

export default App;
//We have created two components: Docs, Signup , now we need to create main dashboard

const ContainerApp = styled.div`
  display:flex;
  flex-direction:row;
  font-family:Poppins;
  width:100%;
`;

const Left = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #14192b;
  height:100vh;
`;
const Right = styled.div`
display: flex;
flex-direction:column;
width:100%;
`;

const Ul = styled.ul`
list-style-type: none;
margin: 0;
padding:0;
background-color: 14192b;
height: 100%; /* Full height */
text-align: center;
color:#fff2f2;
display: flex;
flex-direction: column;
`;
const Li = styled.li`
float: left;
padding: 1em;
padding-left:2em;
padding-right:2em;
text-align:center;
color:"#fff2f2";
width:fit-content;
margin:auto;
margin-top: 1em;  
font-size: 1.15em;
font-weight: 900;

`;
const Icon = styled.div`
    width:35px;
    height:5px;
    background-color:#fff2f2;
    margin: 6px 0;
`;