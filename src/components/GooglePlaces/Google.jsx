import React from 'react';
import { Button } from 'react-bootstrap';
import './Google.css';

const Google = () => {
    

    return (
        <div>
            <div className='google-block' style={{display: 'flex'}}>
                <div className='address'>
                    Address
                </div>
                <Button className='button'>
                    Request Pickup
                </Button>
            </div>
      </div>
  );
};

export default Google;