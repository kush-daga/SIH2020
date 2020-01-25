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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus molestias culpa, repellendus aut iure laudantium nesciunt! Non iure est exercitationem facere magnam maiores. Architecto, ad quis! Dolorem dignissimos omnis, molestiae accusamus voluptatum, rerum consectetur vitae, sit repudiandae perferendis autem placeat? Quidem facilis ea, fugit quo veritatis neque? Alias doloremque, praesentium totam, nostrum corrupti, nihil commodi ad nisi sapiente odit dolorem. Omnis, dolore adipisci commodi maxime officia necessitatibus possimus. Beatae minus suscipit veritatis reiciendis corrupti maiores, ab provident alias labore debitis repudiandae eveniet nihil aperiam dolores numquam maxime ipsa, nam laboriosam quo. Eius ea neque odio culpa sit distinctio impedit adipisci.
                    </p>
                    
                   
                </DataDocs>
                <HeadingDocs>
                    <p>
                        <b>Technology behind this marvel</b>
                    </p>
                </HeadingDocs>
                
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
