import React from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import tas from './tasslogo.png'
library.add(faTrash)

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){


  return (
    <>
    <h2 style={{color:'rgba(255,255,255,0.5)',marginLeft:'45%',fontFamily:'impact'}}>I   w i l l   H e l p    Y o u</h2>
    <div className="App">
      <header>
        <img src={tas} style={{width:'30%',marginLeft:'35%'}} alt="tasks"/>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task to save" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
    </>
  );
 }
}


export default Main;