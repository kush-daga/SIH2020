import React from "react";
import "tachyons";
import styled from "styled-components";
import "./FindDoctor.css";
import img1 from "../images/avatar.png";
import img2 from "../images/notification.jpg";
const FindDoctor = () => {

    return(
        <ContainerFD>
            <div className="Left flex flex-column" style={{width:"20%"}}>
                <ul>
                    <li style={{fontSize:"x-large",fontWeight:"bold"}}>
                        docLedger
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Dashboard
                    </li>
                    <li>
                        Find Doctor
                    </li>
                    <li style={{backgroundColor:"rgba(128,6,6,0.65)", color:"#fff2f2",borderRadius:"55px"}}>
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
            </div>
        </ContainerFD>
    )
}
export default FindDoctor;

const ContainerFD = styled.div`
    display: flex;
    height:100vh;
    font-family:Poppins;
`;

