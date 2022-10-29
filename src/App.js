
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import React, { Component } from 'react';


function App() {
  const [data , setData] = useState([])
  const getNews = () => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=89e2dce848fd4869a89559ed0006d828")
  .then((response) => {
    console.log(response)
    setData(response.data.articles)

  })
  }
  return (
    <>
    <center>
    <div>
      <button  className='App' onClick ={getNews}> Get News </button>
    </div>
    </center>
    <div className='container'>
     <div className='row'>
     {
       
       data.map((value)=>{
        return(
          <div className='col'>
          <div className="card" style={{width:"rem"}}>
              <img src={value.urlToImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <a className="card-link">{value.url}</a>
                <a href="#" className="btn btn-secondary">Go Somewhere</a>
              </div>

            </div>
          </div>
        );
      })
    }
    </div>
    </div>
    </>
      );
}

export default App;
