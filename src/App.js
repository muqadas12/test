import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>helo world</h1>
     <form>
       <label>First name</label>
       <input type="text" placeholder= "name"/>
       <label>last name</label>
       <input type="text" placeholder= "name"/>
       <label>Email:</label>
       <input type="text" placeholder= "email"/>
       <label>Password:</label>
       <input type="text" type="password" placeholder= "pswd"/>

     </form>
    </div>
  );
}

export default App;
