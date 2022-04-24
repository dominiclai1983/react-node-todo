import React from 'react'
import Button from 'react-bootstrap/Button';

const LeftNav = () => {

  const onLogOut = () => {
    localStorage.removeItem('Token');
    document.location.href="/";
  }

  return (
    <>
      <h3>Wellcome!</h3>
      <h6 className="text-secondary"><i className="fas fa-chevron-right text-warning"></i> Your ToDo</h6>
      <h6 className="text-secondary">Your Account</h6>
      <Button variant="secondary" onClick={onLogOut}>LogOut</Button>
    </>
  )

}

export default LeftNav;