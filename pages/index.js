import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

import Tabsshow from './stockTicker.js'

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult("Buy These 3 Stocks:, " + data.result);
    setAnimalInput("");

    let eachStock = data.result.split(", ");

    eachStock[0]
    eachStock[1]
    {eachStock[2]}

    console.log(eachStock);
  }
 
  return (
    
    <div className ={styles.div}>

      <Head>
        <title>OpenAI Quickstart</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
           <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
      <div className="top">
          <nav className="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="/">
          <img width="100px" height="auto" img src="/ifttb.png" title="" alt="" />
</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto" >
                <li className="nav-item">
                  <a className="nav-link" href="">Insights</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Conditions</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className={styles.bigHeading}>
              Invest with simple English
            </h1>
            <div>
              
            <div className="if">
             
             <h1 className = {styles.if}>If</h1>
            <form onSubmit={onSubmit}>              
       <input
         type="text"
         name="animal"
         //placeholder="Enter an Industry"
         placeholder="enter an event"
         value={animalInput}
         onChange={(e) => setAnimalInput(e.target.value)}
       />
       <input type="submit" value="Generate stocks" />
     </form>
         </div>
        
       </div>

       <div className="col-lg-6">
         <img className="stock" src="my-app/public/realstock.png" alt="" />
       </div>
     </div>

     <div className={styles.result}>{result!==undefined && result.split(", ")[0] + " "}  
     <br></br>
     <br></br>
     
     <button className = {styles.but} id = "stock1" type="button" class="btn btn-success">{result!==undefined && result.split(", ")[1]}</button>
     <button className = {styles.but} id="stock2" type="button" class="btn btn-success">{result!==undefined && result.split(", ")[2]}</button>
     <button className = {styles.but} id="stock3" type="button" class="btn btn-success">{result!==undefined && result.split(", ")[3]}</button>

     <Tabsshow symbol = "NASDAQ:FB"> </Tabsshow></div> 
            </div>
      </main>  

    </div>
  );
}


