import React, { useState } from 'react';
import Exit from '../exit/Exit';
import './singleFAQ.css';

const SingleFAQ = ({ question, answer, fullWidth = false }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className='mainSingle'>
        <div onClick={() => setOpen(!open)} className='question_row'>
          <div className='question'>{question}</div>
          {open ? (
            <Exit width="38px" height="38px" />
          ) : (
            <Exit width="38px" height="38px" style={{ transform: 'rotate(45deg)' }} />
          )}
        </div>
        {open ? <div className='answer'> {answer} </div> : null}
      </div>
  );
};

export default SingleFAQ;