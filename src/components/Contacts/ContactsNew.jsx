import React from 'react';
import styles from './Contacts.css';
import downArrow from '../../assets/new-ui/how-it-works/downarrow.png';


const ContactsNew = () => {
  return (
      <>
      <div className='contacts'>
        <h2 className='contacts_header'>Have more questions?</h2>
        <div className='hideondesktop'>
          <div style={{ height: '2px', width: '100%', backgroundColor: '#80808050' }}></div>
          <div className='downContainer'>
            <img src={downArrow} alt="downArrow" />
          </div>
        </div>
        <div className='contacts_list'>
          <div className='contacts_item'>
            <img className='contacts_icon' src='../assets/mail.png' alt="email icon" />
            <h3 className='contacts_itemTitle'>Email us</h3>
            <lable className='contacts_link'>
              info@WashMix.com
            </lable>
          </div>
          <div className='contacts_item'>
            <img className='contacts_icon phone' src='../assets/phone.png' alt="sms icon" />
            <h3 className='contacts_itemTitle'>SMS</h3>
            <lable className='contacts_link'>
              415-993-9274
            </lable>
            <div className='contacts_info'>Text the word “Pickup”</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsNew;