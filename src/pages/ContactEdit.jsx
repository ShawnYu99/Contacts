import React from "react";
import {useNavigate} from 'react-router-dom';

function ContactEdit () {
  const contactName = window.location.href.split('=')[1]
  const [name, setName] = React.useState('')
  const [mobile, setMobile] = React.useState('')
  const navigate = useNavigate();
  const SaveEdit = async () => {
    const response = await fetch(`http://127.0.0.1:3000/contact/edit?name=${contactName}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'name': contactName
      },
      body: JSON.stringify({
        name,
        mobile
      })
    });
    const data = await response.json()
    if (data.error) {
      alert(data.error)
    } else {
      navigate('/contacts')
    }
  }
  return (
    <div>
      Name:<input type='text' onChange={e => setName(e.target.value)}/>
      Mobile Number:<input type='text' onChange={e => setMobile(e.target.value)}/>
      <button onClick={SaveEdit}>Save</button>
    </div>
  )
}

export default ContactEdit;
