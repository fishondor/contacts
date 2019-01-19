import React from 'react';

import '../styles/components/contact.scss';
import {
    USER_PLACEHODER,
    DRIVER_ICONS
} from '../constants/images';

import {
    CONTACT_CARD
} from '../constants/strings';

const PhoneNumber = props => {
    return props.number ? 
        <p>{CONTACT_CARD.PHONE}: {props.number}</p> :
        ''
}

const Email = props => {
    return props.email ? 
        <p>{CONTACT_CARD.EMAIL}: {props.email}</p> :
        ''
}

const Rank = props => (
    <p>{CONTACT_CARD.RANK}: {props.rank}</p>
)

const Name = props => (
    <p className="full-name">{props.name}</p>
)

const Icon = props => {
    if(!props.type)
        return '';
    let driverType = props.type.toLowerCase().trim();
    if(!DRIVER_ICONS[driverType])
        return '';
    return  <img className="driver-icon"
                src={DRIVER_ICONS[driverType]} 
                alt="Icon"></img>
}

const Contact = props => {
    let contact = props.contact;
    let containerStyle = {
        backgroundImage: `url("${contact.profile_image || USER_PLACEHODER}")`
    }
    return (
        <div className="contact-container">
            <div className="inner"
                style={containerStyle}>
                <div className="contact-details">
                    <div className="main">
                        <Name name={contact.name}></Name>
                        <Rank rank={contact.driverRank}></Rank>
                        <Icon type={contact.driverType}></Icon>
                    </div>
                    <PhoneNumber number={contact.phone}></PhoneNumber>
                    <Email email={contact.email}></Email>
                </div>
            </div>
        </div>
    );
}

export default Contact;