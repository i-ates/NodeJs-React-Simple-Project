import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import logo from "../images/brain-svgrepo-com.svg"

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bu alan boş bırakılamaz!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeDoctorID = this.onChangeDoctorID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeHospitalID = this.onChangeHospitalID.bind(this);

    this.state = {
      doctorID: "",
      hospitalID: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeDoctorID(e) {
    this.setState({
      doctorID: e.target.value
    });
  }

  onChangeHospitalID(e){
    this.setState({
      hospitalID: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.doctorID, this.state.hospitalID, this.state.password).then(
        () => {
          this.props.history.push("/segmentationInfo");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
       import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import logo from "../images/brain-svgrepo-com.svg"

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bu alan boş bırakılamaz!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeDoctorID = this.onChangeDoctorID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeHospitalID = this.onChangeHospitalID.bind(this);

    this.state = {
      doctorID: "",
      hospitalID: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeDoctorID(e) {
    this.setState({
      doctorID: e.target.value
    });
  }

  onChangeHospitalID(e){
    this.setState({
      hospitalID: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.doctorID, this.state.hospitalID, this.state.password).then(
        () => {
          this.props.history.push("/segmentationInfo");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container" style={{borderRadius:15,borderColor:"#8A0200",borderWidth:8}}>

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <label style={{textAlign:"center",fontFamily:"Franklin Gothic Medium",fontSize:"medium"}}>ONLINE BEYIN TUMÖRÜ SEGMANTASYON SİSTEMİ</label>
            <div className="form-group">
              <label htmlFor="hostpitalID"></label>
              <Input
                  type="text"
                  className="form-control"
                  placeHolder="Hastane ID Giriniz"
                  name="hospitalID"
                  value={this.state.hospitalID}
                  onChange={this.onChangeHospitalID}
                  validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="doctorID"></label>
              <Input
                type="text"
                className="form-control"
                placeHolder="DoctorID giriniz"
                name="doctorID"
                value={this.state.doctorID}
                onChange={this.onChangeDoctorID}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password"></label>
              <Input
                type="password"
                className="form-control"
                placeHolder="Şifrenizi Giriniz"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <img
                src={logo}
                width={60}
                style={{marginLeft:"6em"}}
            />

            <div className="form-group">
              <button style={{background:"white",width:250,color:"#8A0200",marginLeft:"auto",marginTop:30,borderRadius:"15px", borderColor:"#8A0200",fontSize:"larger", fontWeight:"bolder", borderWidth:2}}
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Giriş Yap</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}
