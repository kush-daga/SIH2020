import React from "react";
import "tachyons";
import styled from "styled-components";
import img1 from "../images/avatar.png";
import img2 from "../images/notification.jpg";
const DocMain = ( { onButtonSubmit } ) => {


    return(
        <ContainerDM>
            <div className="Left flex flex-column" style={{width:"20%",overflowY:"scroll"}}>
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
                        Add Records
                    </li>
                    <li>
                        View Records
                    </li>
                    <li>
                        Chat
                    </li>
                </ul>
            </div>
            <div className="Right flex flex-column" style={{backgroundColor:"#fff2f2",color:"#800606",width:"100%",overflow:"scroll"}}>
                <div style={{display:"flex",fontSize:"x-large",paddingLeft:"65vw",paddingTop:"10vh"}}>
                    <img src={img2} width="35vw" height="auto" style={{paddingRight:"1em"}}/>
                    <img src={img1} width="40vw" />
                    <p className="pa2">Logout</p>
                </div>
                <div className="" style={{padding:"5em",paddingLeft:"15em",width:"30vw"}}>
                    <form className="shadow-2 pill grow" style={{padding:"4em",fontSize:"x-large",width:"fit-content",borderRadius:"2em"}}>
                    <div className="mt3">
                         <label className="db fw6 lh-copy f6" style={{fontSize:"x-large"}}>Enter the Doctor Id</label>
                         <input className="pa2 input-reset ba bg-transparent" 
                            type="name" 
                            name="name"
                            id="name" 
                            placeholder="Doc #ID"
                            style={{borderRadius:"20px"}}
                        />
                     </div>
                     <button onClick={{onButtonSubmit}} style={{backgroundColor:"#FFDCA2",borderRadius:"20px"}}>
                         Submit
                     </button>
                    {/* async getDataAxios(){
                        const response =
                        await axios.get("http://localhost:3000",{params: {a=1,b=2,c=3}})
                        console.log(response.data)
                   } */}
                    </form>
                </div>
            </div>
        </ContainerDM>
    )
}
export default DocMain;

const ContainerDM = styled.div`
    display: flex;
    height:100vh;
    font-family:Poppins;
`;

