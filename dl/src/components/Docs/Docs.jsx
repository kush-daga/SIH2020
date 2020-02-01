import React from "react";
// import "./Docs.css";
import "tachyons";
import styled from "styled-components";
import img1 from "../images/avatar.png";

const Docs = () => {
    return (
        <ContainerDocs>
            <LeftDocs>
                <p style={{ fontSize:"5em",fontWeight: "700", color: "#fff2f2",marginBottom:"0.1em",marginTop:"1.25em" }}>
                    docLedger
                </p>
                <p style={{fontSize: "1.3em",color:"#FFC1C1"}}>
                "Your health records, our security"
                </p>

                <Button>
                        Log In
                </Button>
            </LeftDocs>

            <RightDocs>
                <HeadingDocs>
                    <p className="mt6">
                        What exactly is docLedger?
                    </p>
                </HeadingDocs>
                <DataDocs>
                    <p>
                    A decentralized permissioned blockchain network , docLedger would comprise of a web portal that will allow users to sign up and create their medical wallet, which will consist of the patient’s whole medical history. They can then allow doctors/insurance companies to view their health records, while still having the right to revoke the permission anytime. We would also have an ML trained recommendation system and an analyzer to predict diseases from the symptoms and assure fast treatment. All of this will rely on blockchain technology and follow HIPAA standards.
                    </p>
                    
                   
                </DataDocs>
                {/* <HeadingDocs>
                    <p>
                        <b>Technology behind this marvel</b>
                    </p>
                </HeadingDocs> */}
                
            </RightDocs>
        </ContainerDocs>
    );
};
export default Docs;

const ContainerDocs = styled.div`
    display: flex;
    height: 100vh;
`;
const LeftDocs = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: #fd2e2e;
    text-align: center;
    color: #fff2f2;
`;

const RightDocs = styled.div`
    flex: 3;
    overflow-y: scroll;
    background-color: #fff2f2;
    font-family: Poppins;
`;
const HeadingDocs = styled.div`
    padding-left: 10%;
    margin-top: 20px;
    color: #800606;
    font-size: x-large;
    font-weight: 700;
`;
const DataDocs = styled.div`
        padding-left: 10%;
        margin-top: 10px;
        color: #800606;
        font-size:large;
        font-weight: 300;
`;
const Button = styled.button`
    background-color:#fff2f2;
    border: none;
    color: #800606 ;
    padding:0.5em 1em 0.5em 1em;
    margin-top: 20em;
    margin-left: 80%;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    width: fit-content;
    border-radius:10px;
`;
