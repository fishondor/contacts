import React from 'react';

import '../styles/components/contacts-list.scss';
import Contact from './Contact';

const ContactsList = props => {
    let listItems = props.contacts.map(
        (contact, index) => <Contact key={index} contact={contact}></Contact>
    )
    return <div className="contacts-list">{listItems}</div>;
}

export default ContactsList;