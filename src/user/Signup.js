import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from "react-router-dom";
import { signup } from '../auth/helper';


const Signup = () => {
  return (
    <Base title="sign up page" description="A sign up page for user">
        <p>Test of signup page</p>
    </Base>
  )
}

export default Signup