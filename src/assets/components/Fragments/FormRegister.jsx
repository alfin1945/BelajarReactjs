import React from 'react'
import IndexInput from '../Elements/Input/IndexInput';
import Button from '../Elements/Button/Button'

function FormRegister() {
  return (
    <form action="">
            <IndexInput label="FullName" type="text" placeholder="Insert your name here..." name="email" />
            <IndexInput label="Email" type="email" placeholder="Example@gmail.com" name="email" />
            <IndexInput label="Password" type="password" placeholder="******" name="Password" />
            <IndexInput label="Confirm Password" type="password" placeholder="******" name="Password" />
            <Button nama="Register" warna="text-white" bg="bg-blue-500" hover="bg-transparent"></Button>
          </form>
  )
}

export default FormRegister;