import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { MovieAdd } from "./Admin/MovieAdd";
import { MovieEdit } from "./Admin/MovieEdit";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import './App.css';
import { Login } from "./components/Login";
import { Register } from './components/Register';
import MovieData from "./components/Movie Card/MovieData";
import MovieFull from "./components/Movie Card/MovieFull";
import { Provider } from "react-redux";
import store from "./Store";



function App() {
  
  const [isAdmin, setIsAdmin] = useState(false);
  const setAdminHandler = (isAdmin) => {
    setIsAdmin(isAdmin);
  }

  const [idx, setIdx] = useState(0);
  const setIdFun = (idx) => {
    setIdx(idx);
  }

  const [obj, setObj] = useState([]);



  const getUserData = (newObj) => {
    
    setObj(oldArray => [...oldArray, newObj]);
    // console.log(obj);
  }
  const getUserDataIdx = (newObj,idx) => {
    console.log(newObj,"new");
    
    setObj(oldArray => [...oldArray.slice(0, idx), newObj, ...oldArray.slice(idx + 1)]);
    
    console.log(obj,"old");
  }
  const deleteDataIdx = (idx) => {
    // console.log(newObj,"new");
    
    setObj(oldArray => [...oldArray.slice(0, idx), ...oldArray.slice(idx + 1)]);
    
    console.log(obj,"old");
  }
  // const [currentForm, setCurrentForm] = useState('login');
  // const [currentForm, setCurrentForm] = useState({});

  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // }
  return (
    <div className="App">
      {
        // currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register/>
      } 
      
      <Router>
        <Provider store={store}>
                  <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" render={() => <Login onAdminLogin={setAdminHandler} />} />
            <Route path="/Register" component={Register} />
              <Route path="/MovieData" render={() => <MovieData isAdmin={isAdmin} movieObj={obj} setIdFun={setIdFun} deleteDataIdx={deleteDataIdx} />} />
            <Route path="/EditMovie" component={MovieData} />
            <Route path="/MovieFull" render={() => <MovieFull  obj={obj} idx={idx} />} />
            <Route path="/MovieEdit" render={() => <MovieEdit movieObj={getUserDataIdx} obj={obj} idx={idx} />} />
            <Route path="/MovieAdd" render={() => <MovieAdd movieObj={getUserData} />} />
            
          
            {/* <Route path="/movie/:imdbID" component={MovieDetail} /> */}

            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
        

        </Provider>

      </Router>
      <Footer/> 
    </div>
  );
}

export default App;