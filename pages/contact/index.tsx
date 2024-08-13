import React from 'react';
import { GetStaticProps } from 'next';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import Image from 'next/image';

interface ContactUsProps {
  imageUrl: string;
}

export const getStaticProps: GetStaticProps<ContactUsProps> = async () => {
  const imageUrl = '/images/contact-image.png';

  return {
    props: {
      imageUrl,
    },
  };
};

const ContactUs: React.FC<ContactUsProps> = ({ imageUrl }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', paddingRight: '20px', textAlign: 'center' }}>
          <Image src={imageUrl} alt="Contact Us" width={500} height={500} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div style={{ flex: '1 1 300px', paddingLeft: '20px', width: '100%' }}>
          <h2>Contact Us</h2>
          <div className="p-field">
            <label htmlFor="name">Name</label>
            <InputText id="name" type="text" placeholder="Your Name" style={{ width: '100%', marginTop:'2px' }} />
          </div>
          <div className="p-field my-5">
            <label htmlFor="email">Email</label>
            <InputText id="email" type="email" placeholder="Your Email" style={{ width: '100%', marginTop:'2px' }} />
          </div>
          <div className="p-field">
            <label htmlFor="message">Message</label>
            <InputTextarea id="message" rows={5} placeholder="Your Message" style={{ width: '100%', marginTop:'2px' }} />
          </div>
          <Button label="Submit" icon="pi pi-send" style={{ width: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
