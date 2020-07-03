import React from "react";
import "./App.css";
import UserItem from "./components/UserItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      email:"",
      users: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
    
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    
  }

  handleSubmit(e) {
    e.preventDefault();
     let newUser = { name: this.state.name, email: this.state.email };
     this.setState({ users: [...this.state.users, newUser] });
  }

  render() {
    return (
      <div className="App">
        {/* Form to add new user */}
        
        <div>
        <h2 style={{textAlign:'center', backgroundColor:'red', color:'white'}}>Users Form</h2>
          <form onSubmit={this.handleSubmit} style={{marginTop:'15px', backgroundColor:'#a3ffb6', width:'400px', height:'100vh',marginLeft:'0',paddingLeft:'100px', paddingTop:'100px', fontSize:'15px'}}>
            <input type="text" placeholder="Name" value={this.state.name}
            onChange={this.handleNameChange}
              style={{width:'300px', height:'30px',borderRadius:'4px' }}/>
            <br /><br/>
            <input type="email" placeholder="Email" value={this.state.email}
            onChange={this.handleEmailChange}
            style={{width:'300px',height:'30px',borderRadius:'4px' }} />
            <br /><br/>
            <input type="SUBMIT" style={{width:'120px', color:'white', borderRadius:'5px', marginLeft:'80px', height:'30px', backgroundColor:'#87c6ff', fontSize:'18px'}} />
          </form>
        </div>

        {/* List of users */}
        <div>
          <h2 style={{width:'800px', backgroundColor:'lightblue', textAlign:'center', color:'red', height:'30px'}}>List of Users</h2>
          {
            this.state.users.map( 
              (user, i) => 
            <UserItem {...user} key={i} />
            )
          }
          
  
        </div>
      </div>
    );
  }
}

export default App;
