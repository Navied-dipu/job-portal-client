import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext/AuthContext'

export default function Social() {
    const {googleSignin}=useContext(AuthContext)
    const googleSignIn =()=>{
        googleSignin()
        .then((result)=>{
            console.log(result.user)
        })
        .catch(error =>{console.log(error.message)})
    }
  return (
    <div>
      <button className='btn w-full mt-1' onClick={googleSignIn}>Google</button>
    </div>
  )
}
