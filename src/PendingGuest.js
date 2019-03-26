import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PendingGuest =(props)=>{
    if(props.name){
        return(
            <li className="pending" key={props.index}>
            <span>{props.name}</span>
            </li>
          )
    }
    return null
}
PendingGuest.PropTypes = {
    name: PropTypes.string.isRequired,
}
export default PendingGuest;
