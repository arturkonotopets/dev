import React, { useState } from 'react';
import styles from './singleFAQ.css';

const singleFAQ = ({ question, answer, fullWidth = false }) => {
    const [open, setOpen] = useState<Boolean>(false);

    return (
        <div className={fullWidth ? styles.main_with_fullWidth : styles.main}>
        <div onClick={() => setOpen(!open)} className={styles.question_row}>
          <div className={styles.question}>{question}</div>
          {open ? (
            <Exit width="38px" height="38px" />
          ) : (
            <Exit width="38px" height="38px" style={{ transform: 'rotate(45deg)' }} />
          )}
        </div>
        {open ? <div className={styles.answer}> {answer} </div> : null}
      </div>
  );
};

export default singleFAQ;