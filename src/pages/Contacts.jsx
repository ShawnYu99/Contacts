import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from 'antd';

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
function Contacts () {
  const navigate = useNavigate();
  const [contactsInfo, setContactsInfo] = React.useState();
  const AddNew = () => {
    navigate('/contacts/new')
  }
  const GetContacts = async () => {
    const response = await fetch('http://127.0.0.1:3000/contacts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
    const data = await response.json();
    if (data.error) {
      alert(data.error)
    } else {
      setContactsInfo(data)
    }
  }
  React.useEffect(() => {
    GetContacts()
  }, [])
  const EditContact = (Info) => {
    navigate(`/contact/edit?name=${Info.name}`)
  }
  const DeleteContact = async (Info) => {
    const name = Info.name
    const response = await fetch(`http://127.0.0.1:3000/contact/edit?name=${Info.name}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name
      })
    });
    const data = await response.json()
    if (data.error) {
      alert(data.error);
    } else {
      alert('Deleted successfully');
      GetContacts()
    }
  }
  return (
    <div>
      <button onClick={AddNew}>Add</button>
      <ContactsContainer>
        {
          contactsInfo?.map((contact) => {
            const contactInfo = {
              'name': contact.name,
              'mobile': contact.mobile
            };
            return(
              <Card style={{ width: 300 }}>
                <p>Name: {contactInfo.name}</p>
                <p>Mobile: {contactInfo.mobile}</p>
                <button onClick={() => EditContact(contactInfo)}>Edit</button>
                <button onClick={() => DeleteContact(contactInfo)}>Delete</button>
              </Card>
            )
          })
        }
      </ContactsContainer>
    </div>
  )
}

export default Contacts;
