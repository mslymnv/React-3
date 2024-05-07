import React from 'react'
import Email from './Email'
import Name from './Name'
import Adress from './Adress'
import PersonalInfo from './PersonalInfo'
const Profile = () => {
  return (
    <div>
        <Name/>
        <Email/>
        <Adress/>
        <PersonalInfo/>

    </div>
  )
}

export default Profile