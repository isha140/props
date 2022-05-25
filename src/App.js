import { React, Component } from "react";
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // colornum :1,
      blocks: 
      []

    };
   }
  generateColor = () => {
    return '#' + Math.random().toString(16).substr(-6);
  } 
  handleAdd = () => {
    // for (let i = 0; i < array.length; i++) {
    // const element = array[i];

    console.log("Add called");
    console.log(this.blocks);

    this.setState({
      blocks: [...this.state.blocks, this.generateColor()]
    });
    
  }

  render() {

    console.log(this.state);

    const list = this.state.blocks.map(color => (<div  style={{backgroundColor: color}}
    className="block">
  
      <span>{color}</span>
    </div>)
    );

    return (

      <div>

        {list}  
          <button onClick={this.handleAdd} >Add</button>
      </div>
   );
  }
}

export default App;