import React from 'react'
import FormRegister from '../components/Fragments/FormRegister';
import AuthLayouts from '../components/Layouts/AuthLayouts';

function RegisterPages() {
  return (
    <AuthLayouts title="Register">
        <FormRegister />
    </AuthLayouts>
  )
}

export default RegisterPages;