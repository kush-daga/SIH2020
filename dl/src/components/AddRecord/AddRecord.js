import React from "react";
import "tachyons";
import styled from "styled-components";
import "./AddRecord.css";
import img1 from "../images/avatar.png";
import img2 from "../images/notification.jpg";
const AddRecord = () => {

    return(
        <ContainerAR>
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
                <div className="" style={{padding:"5em",paddingLeft:"15em",width:"30vw"}}>
                    <form className="shadow-2 pill grow" style={{padding:"4em",fontSize:"x-large",width:"fit-content",borderRadius:"2em"}}>
                    <div className="mt3">
                         <label className="db fw6 lh-copy f6" style={{fontSize:"x-large"}}>Institution Name</label>
                         <input className="pa2 input-reset ba bg-transparent" 
                            type="name" 
                            name="name" 
                            id="name" 
                            placeholder="Name of Institution"
                            style={{borderRadius:"20px"}}
                        />
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" style={{fontSize:"x-large"}}>Id Number of Report</label>
                         <input className="pa2 input-reset ba bg-transparent" 
                            type="name" 
                            name="name" 
                            id="name" 
                            placeholder="Enter the id #"
                            style={{borderRadius:"20px"}}
                        />
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" style={{fontSize:"x-large"}}>Enter the date of generation of the report.</label>
                         <input className="pa2 input-reset ba bg-transparent" 
                            type="date" 
                            name="date" 
                            id="date" 
                            placeholder="Date of generation"
                            style={{borderRadius:"30px",justifyContent:"center"}}
                         />
                     </div>
                     <div className="mt3">
                         <label className="db fw6 lh-copy f6" style={{fontSize:"x-large"}}>Upload the generated report here.</label>
                         <input className="pa2 input-reset ba bg-transparent" 
                            type="file" 
                            name="file" 
                            style={{borderRadius:"30px",}}
                         />
                     </div>
                    </form>
                </div>
            </div>
        </ContainerAR>
    )
}
export default AddRecord;

const ContainerAR = styled.div`
    display: flex;
    height:100vh;
    font-family:Poppins;
`;

