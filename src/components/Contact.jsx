import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({name:"",email:"",phoneNumber:"",subject:"",message:""})

  function handleChange(e){
    e.preventDefault();
setFormData(prevData=>{
  return{
    ...prevData,
    [e.target.name] : e.target.value
  }
}
)
  }
  const handleSubmit = (e)=>{
e.preventDefault()
console.log(formData)
  }
  return (
    <>
      <h1>Get in touch</h1>
      <div className="contact-form" >
        <h2 style={{textAlign:"center"}}>Send us a message</h2>
         <form onSubmit={handleSubmit}> 
          <label>
            Name:
            <input name="name" type="text" placeholder="Fullname" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input name="email" type="text" placeholder="Email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone number:
            <input name="phoneNumber" type="text" placeholder=" Phone number" value={formData.phoneNumber} onChange={handleChange} />
          </label>
          <label>
            Subject:
            <input name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          </label>
          <label>
            Message:
            <input name="message" type="text" placeholder="Message" value={formData.message} onChange={handleChange} />
          </label>
          <button className="btn btn-primary " type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
