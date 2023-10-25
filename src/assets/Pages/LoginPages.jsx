import React from 'react'
import FormLogin from '../components/Fragments/FormLogin'
import AuthLayouts from '../components/Layouts/AuthLayouts';

function LoginPages() {
  return (
    <AuthLayouts title="Login">
        <FormLogin />
    </AuthLayouts>
  )
}

export default LoginPages;