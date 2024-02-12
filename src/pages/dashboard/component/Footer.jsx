import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' >
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='#'>
          acba.am
        </a>
      </div>
    </MDBFooter>
  );
}