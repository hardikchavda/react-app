// var React = require('react');
// var ReactDOM = require('react-dom');
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Heading from "./Heading";

const prgname = "Hardik Chavda";
const img1 = "https://picsum.photos/200";
const img2 = "https://picsum.photos/id/300/200";
const img3 = "https://picsum.photos/id/1026/200";
const link = "http://hardikchavda.in/";

ReactDOM.render(
  <>
    <Heading />
    <h1>Welcome to new Example. By {prgname}</h1>
    <a href={link}>
      <div className="img">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>
    </a>
  </>
  ,
  document.getElementById('root')
);