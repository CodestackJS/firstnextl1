import React from 'react'

interface Props {
  params: { id: number }
}

const UserDetailsPage = ({ params: { id } }: Props ) => {
  return (
    <div>UserDetailsPage {id}</div>
  )
}

export default UserDetailsPage

//http://localhost:3000/users/2/photo/2