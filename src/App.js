import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest:"",
    guests: [
      {
        name:'jone',
        isConfirm: false,
        isEditing: false
      },
      {
        name:'treasure',
        isConfirm: true,
        isEditing: true
      }
    ]
  }

  togglefilter = ()=> this.setState({isFiltered: !this.state.isFiltered})
  getTotalInvited = ()=> this.state.guest.length
  // getAttendingGuest =()=>
  // getUnconfirmGuest =()=>
  toggleGuestProperty = (property,indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest,index)=>{
        if(index===indexToChange){
          return{
            ...guest,
            [property]: !guest[property]
          };
        }else return guest;
        
      })
    })
  }
  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest,index)=>{
        if(index===indexToChange){
          return{
            ...guest,
            name
          };
        }else return guest;
        
      })
    })
  }
  toggleConfirmation = (index)=>this.toggleGuestProperty('isConfirm',index);
  toggleIsEditing = (index)=>this.toggleGuestProperty('isEditing',index);

  addPendingName=(e)=> this.setState({pendingGuest:e.target.value});

  addName= e =>{
    e.preventDefault();
    this.setState({
      guests:[
        { name: this.state.pendingGuest,
          isConfirm: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest:""
    })
  }

  removeGuest = (index)=>{
    this.setState({
      guests: [
        ...this.state.guests.slice(0,index),
        ...this.state.guests.slice(index+1)
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Response Track</h1>
          <form onSubmit={this.addName}>
            <input type="text" value={this.state.pendingGuest} placeholder="Invite Someone" onChange={this.addPendingName} />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" onChange={this.togglefilter} checked={this.state.isFiltered}/> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
            <tr>
                <td>Attending:</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>3</td>
            </tr>
            </tbody>
          </table>
          <GuestList guests={this.state.guests} toggleConfirmation={this.toggleConfirmation}
          removeGuest={this.removeGuest}
          toggleIsEditing={this.toggleIsEditing}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
