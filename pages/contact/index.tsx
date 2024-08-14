// import React from 'react';
// import { GetStaticProps } from 'next';
// import { InputText } from 'primereact/inputtext';
// import { Button } from 'primereact/button';
// import { InputTextarea } from 'primereact/inputtextarea';
// import Image from 'next/image';
// import { useTranslation } from 'react-i18next';

// interface ContactUsProps {
//   imageUrl: string;
// }

// export const getStaticProps: GetStaticProps<ContactUsProps> = async () => {
//   const imageUrl = '/images/contact-image.png';

//   return {
//     props: {
//       imageUrl,
//     },
//   };
// };

// const ContactUs: React.FC<ContactUsProps> = ({ imageUrl }) => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', flexWrap: 'wrap' }}>
//         <div style={{ flex: '1 1 300px', paddingRight: '20px', textAlign: 'center' }}>
//           <Image src={imageUrl} alt={t('contactUs.title')} width={500} height={500} style={{ maxWidth: '100%', height: 'auto' }} />
//         </div>
//         <div style={{ flex: '1 1 300px', paddingLeft: '20px', width: '100%' }}>
//           <h2>{t('contactUs.title')}</h2>
//           <div className="p-field">
//             <label htmlFor="name">{t('contactUs.name')}</label>
//             <InputText id="name" type="text" placeholder={t('contactUs.name')} style={{ width: '100%', marginTop: '2px' }} />
//           </div>
//           <div className="p-field my-5">
//             <label htmlFor="email">{t('contactUs.email')}</label>
//             <InputText id="email" type="email" placeholder={t('contactUs.email')} style={{ width: '100%', marginTop: '2px' }} />
//           </div>
//           <div className="p-field">
//             <label htmlFor="message">{t('contactUs.message')}</label>
//             <InputTextarea id="message" rows={5} placeholder={t('contactUs.message')} style={{ width: '100%', marginTop: '2px' }} />
//           </div>
//           <Button label={t('contactUs.submit')} icon="pi pi-send" style={{ width: '100%' }} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;


import React from 'react';
import { GetStaticProps } from 'next';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ContactUsProps {
  imageUrl: string;
}

export const getStaticProps: GetStaticProps<ContactUsProps> = async ({ locale }) => {
  const imageUrl = '/images/contact-image.png';

  return {
    props: {
      imageUrl,
      messages: (await import(`../../messages/${locale}.json`)).default
    },
  };
};

const ContactUs: React.FC<ContactUsProps> = ({ imageUrl }) => {
  const t = useTranslations('ContactUs');

  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', paddingRight: '20px', textAlign: 'center' }}>
            <Image src={imageUrl} alt={t('title')} width={500} height={500} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div style={{ flex: '1 1 300px', paddingLeft: '20px', width: '100%' }}>
            <h2>{t('title')}</h2>
            <div className="p-field">
              <label htmlFor="name">{t('name')}</label>
              <InputText id="name" type="text" placeholder={t('name')} style={{ width: '100%', marginTop: '2px' }} />
            </div>
            <div className="p-field my-5">
              <label htmlFor="email">{t('email')}</label>
              <InputText id="email" type="email" placeholder={t('email')} style={{ width: '100%', marginTop: '2px' }} />
            </div>
            <div className="p-field">
              <label htmlFor="message">{t('message')}</label>
              <InputTextarea id="message" rows={5} placeholder={t('message')} style={{ width: '100%', marginTop: '2px' }} />
            </div>
            <Button label={t('submit')} icon="pi pi-send" style={{ width: '100%' }} />
          </div>
        </div>
    </>
  );
};

export default ContactUs;
