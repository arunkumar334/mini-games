import React from 'react';

function ErrorPage(){
    return (<React.Fragment>
        <div style={{textAlign:'center',margin:'10% 0'}}>
          <h3 style={{color:"blue"}}>Requested Page Not Found! Please Click the Home icon to go to Dashboard!</h3>
        </div>
      </React.Fragment>
    )
  }

export default ErrorPage;
