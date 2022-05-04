/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { createElement, Component } from "react";
import ReactDOM from "react-dom";
import { MainFormJSX } from "./components/MainFormJSX.jsx";


// Render React here

  const container = document.getElementById("reactContainer");

  const e = createElement;
  class MainForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };

    //   this.handleSubmit();
    }


    render() {
      return e(MainFormJSX, { });
    }
  }

  ReactDOM.render(e(MainForm), container);

