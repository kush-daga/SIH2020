import React, { Component } from "react";
import "tachyons";
import styled from "styled-components";
import img1 from "../images/avatar.png";
import img2 from "../images/notification.jpg";
class SymCheck extends Component {
    render(){
        return(
            <ContainerSC>
                <div className="Left flex flex-column" style={{width:"20%"}}>
                    <ul>
                        <li style={{fontSize:"x-large",fontWeight:"bold"}}>
                            docLedger
                        </li>
                        <li>
                            Home
                        </li>
                        <li style={{backgroundColor:"rgba(128,6,6,0.65)", color:"#fff2f2",borderRadius:"55px"}}>
                            Dashboard
                        </li>
                        <li>
                            Find Doctor
                        </li>
                        <li>
                            Add Record
                        </li>
                        <li>
                            View Record
                        </li>
                        <li>
                            Chat
                        </li>
                    </ul>
                </div>
                <div className="Right flex flex-column" style={{backgroundColor:"#fff2f2",color:"#800606",width:"100%",overflow:"hidden"}}>
                    <div style={{display:"flex",fontSize:"x-large",paddingLeft:"65vw",paddingTop:"10vh"}}>
                        <img src={img2} width="35vw" height="auto" style={{paddingRight:"1em"}}/>
                        <img src={img1} width="40vw" />
                        <p className="pa2">Logout</p>
                    </div>
                    <div className="Up flex" style={{padding:"10px",paddingLeft:"100px"}}>
                        <div className="WelcomeText pa3" style={{fontSize:"xx-large",textAlign:"justify", paddingTop:"4em", paddingLeft:"1.85em"}}>
                            Hi Kush! <br /> Welcome to your dash..
                        </div>
                    </div>
                    <div className="flex" style={{paddingTop:"0.05em",paddingLeft:"70px", justifyContent:"center"}}>
                        <div className="flex flex-wrap pa4 pl2 ma3" style={{width:"70vw", margin:"auto",height:"60vh", backgroundColor:"#fd2e2e", color:"#FFF2F2", paddingBottom:"30px",borderRadius:"55px"}}>
                            <p style={{marginLeft:"4vw",padding:"1.7em", height:"fit-content",width:"4.5em",backgroundColor:"#fff2f2",color:"#fd2e2e",borderRadius:"55px",fontSize:"xx-large",fontWeight:"650"}}>
                                42
                            </p>
                            <div style={{color:"#fff2f2",fontSize:"xx-large",padding:"1.7em",fontWeight:"bolder",marginRight:"15vw"}}>
                                Records stored safely!<br /> <p style={{fontSize:"0.75em",textDecoration:"underline"}}> Add more</p>
                            </div>
                            <p style={{marginLeft:"4vw",padding:"1.7em", height:"fit-content",width:"4.5em",backgroundColor:"#fff2f2",color:"#fd2e2e",borderRadius:"55px",fontSize:"xx-large",fontWeight:"650"}}>
                                2
                            </p>
                            <div style={{color:"#fff2f2",fontSize:"xx-large",padding:"1.7em",fontWeight:"bolder"}}>
                                Records stored safely!<br /> <p style={{fontSize:"0.75em",textDecoration:"underline"}}> Add more</p>
                            </div>
                            
                        </div>
                        
                        

                    </div>
                </div>
            </ContainerSC>
        )
    }
    
}
export default SymCheck;

const ContainerSC = styled.div`
    display: flex;
    height:100vh;
    font-family:Poppins;
`;

