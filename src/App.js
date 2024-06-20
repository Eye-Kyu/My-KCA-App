import React, { Component} from 'react';
import StudentInfo from './components/studentInfo/StudentInfopg';
import './App.css';

class App extends Component{
  render() {
  return (
      <div className='App'>
        <StudentInfo />
      </div>
   
  );
}
}

export default App;
