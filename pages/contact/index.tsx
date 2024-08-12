// pages/contact.js
import React from 'react';

const Contact = ({ contactInfo } : any) => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Address: {contactInfo.address}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>Email: {contactInfo.email}</p>
    </div>
  );
};

export async function getStaticProps() {
  const contactInfo = {
    address: '123 Main St, Anytown, USA',
    phone: '(123) 456-7890',
    email: 'contact@example.com'
  };

  return {
    props: {
      contactInfo
    }
  };
}

export default Contact;
