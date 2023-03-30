import React from 'react';

import {
  ImInstagram,
  ImTwitter,
  ImLinkedIn,
} from 'react-icons/im'


const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a herf='https://www.instagram.com/capturedby._.pj/' target="_blank">
          <ImInstagram/>
          </a>
        </li>
        <li>
          <a herf='https://twitter.com/its_PiiJ' target="_blank">
          <ImTwitter />
          </a>
        </li>
        {/* <li><a herf="#" target='_blank'>
        <ImLinkedIn/></a></li> */}
      </ul>
    </div>
  );
};

export default Socials;
