import React from "react";
import "tachyons";
import styled from "styled-components";
import "./PMain.css";

const PMain = () => {

    return(
        <ContainerPMain>
            <LeftPMain>
                <UpPMain>
                <NavPMain>
                   <ul>
                    <li><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50" style={{borderRadius:"50px"}} /></li>
                    <li>
                        <button type="button" className="link ph3 pv2 mb2 dib white" style={{backgroundColor:"#FFA82E",color:"#FD2E2E",fontFamily:"Poppins",borderRadius:"14px",fontWeight:"bold",boxShadow:"2px 4px #FD2E2E",textShadow:"1px 1px #fd2e2e",width:"120px",wordSpacing:"10px"}}>
                             View History
                        </button>
                    </li>
                    <li>
                        <button type="button" className="link ph3 pv2 mb2 dib white" style={{backgroundColor:"#FFA82E",color:"#FD2E2E",fontFamily:"Poppins",borderRadius:"14px",fontWeight:"bold",boxShadow:"2px 4px #FD2E2E",textShadow:"1px 1px #fd2e2e",width:"120px",wordSpacing:"10px"}}>
                            Find Doctor
                        </button>
                    </li>
                   </ul>
                </NavPMain>

                </UpPMain>
                <DownPMain>
                     <PMainTable>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                        </tr>
                    </PMainTable>
                </DownPMain>
            </LeftPMain>
            <RightPMain>
                <div>
                This is it mate!
                </div>
            </RightPMain>
        </ContainerPMain>
    )
}
export default PMain;

const ContainerPMain = styled.div`
    display: flex;
    height:100vh;

`;
const LeftPMain = styled.div`
    display: flex;
    flex:1;
    flex-direction:column;
    width:30%;
    background-color:#fd2e2e;
`;
const RightPMain = styled.div`
    display:flex;
    flex:2;
    background-color:#fff2f2;
`;
const UpPMain = styled.div`
    flex:1;
    flex-direction:column;
    height:50%;
    padding:10px;
`;
const DownPMain = styled.div`
    flex:2;
    flex-direction:column;
    height:50%;
    padding:10px;
    padding-top:100px;
`;
const NavPMain = styled.div``;
const PMainTable = styled.table`
    width:100%;
    padding-right:45px;
    text-align: center;
    border-radius: 12px;
    border-collapse: collapse;
    border: 1px solid black;
`;
