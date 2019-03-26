import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList =(props)=>{
  return(
    <ul>
      <PendingGuest name={props.pendingGuest}/>
      {props.guests.filter((guest)=>!props.isFiltered||guest.isConfirm).map((guest,index)=>
        <Guest 
        key={index}
        name={guest.name} 
        isConfirm={guest.isConfirm} 
        isEditing={guest.isEditing}
        toggleConfirmation={()=>props.toggleConfirmation(index)}
        toggleIsEditing={()=>props.toggleIsEditing(index)}
        setName={(text)=>{props.setNameAt(text,index)}}
        handleRemove={()=>props.removeGuest(index)}
        />
        
      )}
    </ul>
    );
}

GuestList.PropTypes = {
    guest: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleIsEditing: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}
export default GuestList;

