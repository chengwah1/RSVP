import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName'
const Guest =(props)=>{

  return(
        <li className="responded" key={props.index}>
        <GuestName isEditing={props.isEditing} handleNameEdit={e=>props.setName(e.target.value)}>{props.name}</GuestName>
          <label>
            <input 
            type="checkbox" 
            checked={props.isConfirm} 
            onChange={props.toggleConfirmation}
            /> Confirmed
          </label>
          <button
          onClick={props.toggleIsEditing}
          >{props.isEditing?'save':'edit'}</button>
          <button onClick={props.handleRemove}>remove</button>
        </li>
      )}

Guest.PropTypes = {
    name: PropTypes.string.isRequired,
    isConfirm: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleIsEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired

}
export default Guest;
