import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GuestName =(props)=>{

   const handleNameEdits=(e)=>{
        props.handleNameEdit(e)
    }



    if (props.isEditing)
  return(
      <input 
      type="text" 
      value={props.children}
      onChange={handleNameEdits} />
  );
  return(
      <span>{props.children}</span>
  )
  }
GuestName.PropTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdit: PropTypes.func.isRequired,
}
export default GuestName;
