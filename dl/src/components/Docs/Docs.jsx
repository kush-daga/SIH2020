import React from 'react';
import './Docs.css';
import 'tachyons';
const Docs = () => {
    return(
        <div className='container'>
            <div className='left'>
                <p style={{fontWeight:'bold'}}>docLedger</p>
                <p style={{fontSize:'20px',color:'#FFC1C1'}}>"Your health records, our security"</p>
            </div>

            <div className='right'>
                <div className='Heading'>
                    <p><b>What exactly is docLedger?</b></p>
                </div>
                <div className='Data'>
                    docLedger is the best way to store your medical records. The one stop for all patients.
                    With state of the art blockchain technology using Hyperledger fabric (obvious in the name..),
                    
                </div>
                

            </div>
        </div>
    )
}
export default Docs;