import React from 'react';
import './FAQ.css';
import downArrow from '../../assets/new-ui/how-it-works/downarrow.png';
import SingleFAQ from '../singleFAQ/SingleFAQ';
import { Button } from 'react-bootstrap';
import Google from '../GooglePlaces/Google';

const FAQ = () => {
    

    return (
    <section className="FAQ-section">
        <div className="container">
            
            <div className='FAQ'>
                <h2 className='faq-title'>Wash & Fold FAQ</h2>
                <div className='hideondesktop'>
                    <div style={{ height: '2px', width: '100%', backgroundColor: '#80808050' }}></div>
                    <div className='downContainer'>
                        <img src={downArrow} alt="downArrow" />
                    </div>
                </div>
                <SingleFAQ
                question="How do I sending in my order [the first time]?"
                answer={
                    <p>
                    For your <b>first order</b>: use any bag you have. Be sure to attach a note [inside] with your account
                    detail [i.e. Name + Address + Phone #]. We will provide you with your own unique laundry bag and
                    essentials for your <b>next order</b>.
                    </p>
                }
                />
                <SingleFAQ
                question="What if I lose the bags provided by WashMix? OR if I have more clothes
                that can fit in one bag?"
                answer={
                    <p>
                    If you run out of the counter laundry bags provided by WashMix, you can use any bag to send in your
                    order. It&apos;s always a good practice to make sure the bag used can be tightened and shut to avoid
                    items falling out. <b>IF</b> you’re using any other bags than what we provide, be sure to attach a
                    note with your account detail [i.e. Name + Address + Phone #].
                    </p>
                }
                />
                <SingleFAQ
                question="Is it important to use my Cell Phone number when signing up?"
                answer={
                    <p>
                    <b>YES!</b> WashMix communicates with its customers via SMS/Text. It&apos;s important that you use a
                    cell phone number, which allows you to send and receive text messages.
                    <br />
                    <i>[Msg & data rates may apply by your cell phone carrier.]</i>
                    </p>
                }
                />
                <SingleFAQ
                question=" I live in a secure building, how do I give access to the WashMix team to access 
                my unit?"
                answer={
                    <p>
                    Many buildings have a system in place to allow vendors easy access to the building or your unit.{' '}
                    <b>For example, entry Code [i.e: #1234 + Enter]. IF</b> there are special instructions, be sure to
                    include them when registering for your account. Remember, you are <b>NOT</b> required to be present
                    for pickup or drop off.
                    </p>
                }
                />
            </div>
            <div className='checkService'>
                <p style={{ fontSize: 'larger' }}>See if we service your area</p>
                <Google/>
            </div>
            {/* <ContactsNew />
            <BadgeContainerNew /> */}
        </div>
    </section>
  );
};

export default FAQ;