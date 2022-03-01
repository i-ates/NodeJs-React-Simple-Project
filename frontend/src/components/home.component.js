import React, { Component } from "react";

import UserService from "../services/user.service";
import logo from "../images/brain.SVG"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  onClickButton = () =>{
      this.props.history.push("/login");
      window.location.reload();
  }

  render() {
    return (
        <div className='container' style={{alignItems:"center"}}>
          <p style={{color:"#8A0200",textAlign:"center",fontFamily:"Franklin Gothic Medium",fontSize:"xx-large",fontWeight:"bold"}} >ONLINE BEYİN SEGMENTASYON SİSTEMİ</p>
import React, { Component } from "react";

import UserService from "../services/user.service";
import logo from "../images/brain.SVG"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  onClickButton = () =>{
      this.props.history.push("/login");
      window.location.reload();
  }

  render() {
    return (
        <div className='container' style={{alignItems:"center"}}>
          <p style={{color:"#8A0200",textAlign:"center",fontFamily:"Franklin Gothic Medium",fontSize:"xx-large",fontWeight:"bold"}} >ONLINE BEYİN SEGMENTASYON SİSTEMİ</p>
          <div>
            <img src={logo} className="center-block" style={{marginLeft:"17em",marginRight:"auto",marginTop:30}} width="500" height="300"/>
            <div>
                <button style={{background:"white",width:250,color:"#8A0200",marginLeft:"20em",marginTop:30,borderRadius:"15px", borderColor:"#8A0200",fontSize:"larger", fontWeight:"bolder", borderWidth:2}}
                        className="center-block" onClick={this.onClickButton}>GİRİŞ YAP</button>
            </div>
            <p style={{textAlign:"right", color:"#8A0200",fontSize:"small",fontWeight:"bolder",textDecoration:"underline"}}>Sisteme Katılmak İçin İletişime Geçiniz</p>
          </div>
        </div>
    );
  }
}
