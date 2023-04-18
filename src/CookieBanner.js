import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Прийняти"
      cookieName="myAwesomeCookieConsent"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      expires={150}
    >
      Ми використовуємо файли cookie, щоб забезпечити вам найкращий досвід на нашому веб-сайті.
    </CookieConsent>
  );
};

export default CookieBanner;