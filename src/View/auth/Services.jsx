import React from 'react'
import axios from 'axios';
function Services() {
  return (


    async function Services() {
      return (
       async function setUserRegistration(formData) {
        const response = await axios.post("/api/register", formData);
        return response.data;
        
       }
      )
    }
    
    
  )
}

export default Services
