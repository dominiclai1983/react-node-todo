import React from 'react'
import Button from 'react-bootstrap/Button';

const LeftNavAccount = (props) => {

  const {username, onLogOut} = props;

  return (
    <>
      <h3>Wellcome!<span className='text-secondary'>{` ${username}`}</span></h3>
      <h6 className="text-secondary">Your ToDo</h6>
      <h6 className="text-secondary"><i className="fas fa-chevron-right text-warning"></i> Your Account</h6>
      <Button variant="secondary" onClick={onLogOut}>LogOut</Button>
    </>
  )

}

export default LeftNavAccount;