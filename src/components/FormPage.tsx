import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage: React.FC = () => {
    const [name, setName] = useState<string> ('');
    const [phone, setPhone] = useState<string> ('');
    const [email, setEmail] = useState<string> ('');
    const navigate = useNavigate();
    
    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault();
        if(name && phone && email){
            const userDetails = {name,phone,email};
            localStorage.setItem('userDetails',JSON.stringify(userDetails));
            alert('Your details have been saved');
            navigate('/Second')
        }else{
            alert('Please fill all the fields');
        }
    }
    
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const spanStyle: React.CSSProperties = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle: React.CSSProperties = {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle} action="">
        <span style={spanStyle}>Enter Name</span>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name" style={inputStyle} />

        <span style={spanStyle}>Enter Mobile Number</span>
        <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}  placeholder="Enter Mobile Number" style={inputStyle} />

        <span style={spanStyle}>Enter Email</span>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" style={inputStyle} />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
