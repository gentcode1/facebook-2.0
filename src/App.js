import './App.css';
import Header from "./Component/Header"
import Sidebar from "./Component/Sidebar"
import Feed from './Component/Feed'
import Widget from './Component/Widget'
import Login from  './Component/Login'
import {useStateValue} from './Component/StateProvider'
  const App=()=>{
    const[{user}, dispatch] =useStateValue();
    return(
  <div className="app">
     {!user ? (<Login/>) :
     ( 
       <>
     < Header/>
       <div className="app__body">
       <Sidebar/>
       <Feed/>
       <Widget/> 
       </div>
       </>
       )
     }
      
      
    </div>
  );
}

export default App;
