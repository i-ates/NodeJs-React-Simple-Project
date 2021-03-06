import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../images/brain-svgrepo-com.svg";


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { doctorID: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

    handleSegmentation = () => {
        this.props.history.push("/segmentation");
        window.location.reload();
    }

    handleSegmentationInfo = () => {
        this.props.history.push("/segmentationInfo");
        window.location.reload();
    }

    handleLogout = () => {
        AuthService.logout();
        this.props.history.push("/home");
        window.location.reload();
    }


    render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
        <div className="container"
             style={{marginLeft:-100,borderLeftWidth:20,borderTopWidth:20,borderLeftColor:"#8A0200",
                 borderLeftStyle:"solid",borderTopColor:"#8A0200",borderTopStyle:"solid",height:575,minWidth:1300}}>
            <Row>
                <Col style={{borderRightWidth:5, borderRightColor:"#8A0200",borderRightStyle:"solid", maxWidth:275,height:550}}>
                    <p style={{fontSize:"small", fontWeight:"bold", marginTop:20,textDecoration:"underline"}}
                    onClick={this.handleSegmentationInfo}>Beyin Tümörü Segmentasyonu Nedir?</p>
                    <p className="text-md-center" style={{fontSize:"small", fontWeight:"bold", marginTop:20,textDecoration:"underline"}}
                    onClick={this.handleSegmentation}>Segmantansyon Modeli Kullan</p>

                    <p className="text-md-center" style={{marginTop:420,fontSize:"small", fontWeight:"bold",textDecoration:"underline"}}
                    onClick={this.handleLogout}>Çıkış</p >

                </Col>
                <Col>
                    <Row>
                        <p  style={{marginTop:20,marginLeft:300,fontFamily:"Franklin Gothic Medium",fontSize:"large",fontWeight:"bold"}} >
                            BEYİN TÜMÖRÜ SEGMMANTASYONU NEDİR?</p>
                    </Row>
                    <Row>
                        <p  style={{marginLeft:5,fontFamily:"Franklin Gothic Medium",fontSize:"large",fontWeight:"bold"}} >
                            &emsp;&ensp;Kafatası içerisinde beyin dokusunda farklı nedenlerle ortaya çıkmış olan ve hızla gelişen beyin tümörü
                             hastlalığının tespiti ve tedavisi zordur. Beyin Tümörü hastalığının terken tespiti çok önemlidir. Çoğu vakanın
                            erken tespit ile önüne geçildiği görülmekte- dir.
                        </p>
                        <p  style={{marginLeft:5,fontFamily:"Franklin Gothic Medium",fontSize:"large",fontWeight:"bold"}} >
                            &emsp;&ensp;Beyin tümörü için bir çok derin öğrenme algoritması kullanılmaktadır. Görüntü segmentasyon örüntü tanıma,
                            makine öğrenmesi ve tıbbi görüntü işleme alanlarında kullanılmaktadır. MR görüntüleri ile görüntü segmentasyonu işlemi
                            gerçek- leştirildiğinde beyin tümörünün yerini ve boyutunu saptamak adına bize oldukça hızlı bir yöntem sunar.
                        </p>
                        <img src={logo} style={{width:150,marginLeft: 400,marginTop:40}}/>

                    </Row>


                </Col>
            </Row>

        </div>
    );
  }
}
                                                                                        import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../images/brain-svgrepo-com.svg";


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { doctorID: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

    handleSegmentation = () => {
        this.props.history.push("/segmentation");
        window.location.reload();
    }

    handleSegmentationInfo = () => {
        this.props.history.push("/segmentationInfo");
        window.location.reload();
    }

    handleLogout = () => {
        AuthService.logout();
        this.props.history.push("/home");
        window.location.reload();
    }


    render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
        <div className="container"
             style={{marginLeft:-100,borderLeftWidth:20,borderTopWidth:20,borderLeftColor:"#8A0200",
                 borderLeftStyle:"solid",borderTopColor:"#8A0200",borderTopStyle:"solid",height:575,minWidth:1300}}>
            <Row>
                <Col style={{borderRightWidth:5, borderRightColor:"#8A0200",borderRightStyle:"solid", maxWidth:275,height:550}}>
                    <p style={{fontSize:"small", fontWeight:"bold", marginTop:20,textDecoration:"underline"}}
                    onClick={this.handleSegmentationInfo}>Beyin Tümörü Segmentasyonu Nedir?</p>
                    <p className="text-md-center" style={{fontSize:"small", fontWeight:"bold", marginTop:20,textDecoration:"underline"}}
                    onClick={this.handleSegmentation}>Segmantansyon Modeli Kullan</p>

                    <p className="text-md-center" style={{marginTop:420,fontSize:"small", fontWeight:"bold",textDecoration:"underline"}}
                    onClick={this.handleLogout}>Çıkış</p >

                </Col>
                <Col>
                    <Row>
                        <p  style={{marginTop:20,marginLeft:300,fontFamily:"Franklin Gothic Medium",fontSize:"large",fontWeight:"bold"}} >
                            BEYİN TÜMÖRÜ SEGMMANTASYONU NEDİR?</p>
                    </Row>
                    <Row>
                        <p  style={{marginLeft:5,fontFamily:"Franklin Gothic Medium",fontSize:"large",fontWeight:"bold"}} >
                            &emsp;&ensp;Kafatası içerisinde beyin dokusunda farklı nedenlerle ortaya çıkmış olan ve hızla gelişen beyin tümörü
                             hastlalığının tespiti ve tedavisi zordur. Beyin Tümörü hastalığının terken tespiti çok önemlidir. Çoğu vakanın
                            erken tespit ile önüne geçildiği görülmekte- dir.
                        </p>
                        <p  style={{marginLeft:5,fontFamily:"Franklin Gothic Medium",fontSize:"large",fontWeight:"bold"}} >
                            &emsp;&ensp;Beyin tümörü için bir çok derin öğrenme algoritması kullanılmaktadır. Görüntü segmentasyon örüntü tanıma,
                            makine öğrenmesi ve tıbbi görüntü işleme alanlarında kullanılmaktadır. MR görüntüleri ile görüntü segmentasyonu işlemi
                            gerçek- leştirildiğinde beyin tümörünün yerini ve boyutunu saptamak adına bize oldukça hızlı bir yöntem sunar.
                        </p>
                        <img src={logo} style={{width:150,marginLeft: 400,marginTop:40}}/>

                    </Row>


                </Col>
            </Row>

        </div>
    );
  }
}
