import React from 'react'
import IndexInput from '../Elements/Input/IndexInput';
import Button from '../Elements/Button/Button';

function FormLogin() {
  return (
    <form action="">
      <IndexInput label="Email" type="email" placeholder="Example@gmail.com" name="email" />
      <IndexInput label="Password" type="password" placeholder="******" name="Password" />
      <Button nama="Login" warna="text-white" bg="bg-blue-500" hover="bg-transparent"></Button>
    </form>
  )
}

export default FormLogin;