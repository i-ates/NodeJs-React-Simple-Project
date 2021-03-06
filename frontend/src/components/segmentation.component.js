import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../images/brain.SVG";


export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            img: logo,
            outputImg:logo,
            currentUser: { doctorID: "" }
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
    }

    handleChangeImage = e => {
        this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
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

    handleSegmentation = () => {
        this.props.history.push("/segmentation");
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
                        onClick={this.handleSegmentationInfo}>Beyin T??m??r?? Segmentasyonu Nedir?</p>
                        <p className="text-md-center" style={{fontSize:"small", fontWeight:"bold", marginTop:20,textDecoration:"underline"}}
                        onClick={this.handleSegmentation}>Segmantansyon Modeli Kullan</p>

                        <p className="text-md-center" style={{marginTop:420,fontSize:"small", fontWeight:"bold",textDecoration:"underline"}}
                           onClick={this.handleLogout}>????k????</p >

                    </Col>
                    <Col>
                        <Row>
                            <p  style={{marginLeft:300,fontFamily:"Franklin Gothic Medium",fontSize:"x-large",fontWeight:"bold"}} >ONLINE BEY??N SEGMENTASYON S??STEM??</p>
                        </Row>
                        <Row>
                            <Col style={{marginLeft:30,borderWidth:1,borderColor:"#8A0200",borderStyle:"solid",maxWidth:475,maxHeight:400}}>
                                <img  style={{maxWidth:450, maxHeight:390}} src={this.state.img} alt="img"/>
                            </Col>
                            <Col style={{borderWidth:1,borderLeftWidth:0,borderColor:"#8A0200",borderStyle:"solid",maxWidth:475,maxHeight:400}}>
                                <img  style={{maxWidth:450, maxHeight:390,}} src={this.state.outputImg} alt="img"/>
                            </Col>
                        </Row>
                        <label style={{border:"1px solid #8A0200",display:"inline-block" ,backgroundColor:"#8A0200",
                            color:"white",borderRadius:15,width:75,textAlign:"center",marginTop:30,marginLeft:30}} >
                            <input style={{display:"none"}} type="file" id="img" name="img" accept="image/*" className="w-100" onChange={this.handleChangeImage}/>
                            <label htmlFor="img">Y??kle</label>

                        </label>

                    </Col>
                </Row>

            </div>
        );
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../images/brain.SVG";


export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            img: logo,
            outputImg:logo,
            currentUser: { doctorID: "" }
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
    }

    handleChangeImage = e => {
        this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
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

    handleSegmentation = () => {
        this.props.history.push("/segmentation");
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
                        onClick={this.handleSegmentationInfo}>Beyin T??m??r?? Segmentasyonu Nedir?</p>
                        <p className="text-md-center" style={{fontSize:"small", fontWeight:"bold", marginTop:20,textDecoration:"underline"}}
                        onClick={this.handleSegmentation}>Segmantansyon Modeli Kullan</p>

                        <p className="text-md-center" style={{marginTop:420,fontSize:"small", fontWeight:"bold",textDecoration:"underline"}}
                           onClick={this.handleLogout}>????k????</p >

                    </Col>
                    <Col>
                        <Row>
                            <p  style={{marginLeft:300,fontFamily:"Franklin Gothic Medium",fontSize:"x-large",fontWeight:"bold"}} >ONLINE BEY??N SEGMENTASYON S??STEM??</p>
                        </Row>
                        <Row>
                            <Col style={{marginLeft:30,borderWidth:1,borderColor:"#8A0200",borderStyle:"solid",maxWidth:475,maxHeight:400}}>
                                <img  style={{maxWidth:450, maxHeight:390}} src={this.state.img} alt="img"/>
                            </Col>
                            <Col style={{borderWidth:1,borderLeftWidth:0,borderColor:"#8A0200",borderStyle:"solid",maxWidth:475,maxHeight:400}}>
                                <img  style={{maxWidth:450, maxHeight:390,}} src={this.state.outputImg} alt="img"/>
                            </Col>
                        </Row>
                        <label style={{border:"1px solid #8A0200",display:"inline-block" ,backgroundColor:"#8A0200",
                            color:"white",borderRadius:15,width:75,textAlign:"center",marginTop:30,marginLeft:30}} >
                            <input style={{display:"none"}} type="file" id="img" name="img" accept="image/*" className="w-100" onChange={this.handleChangeImage}/>
                            <label htmlFor="img">Y??kle</label>

                        </label>

                    </Col>
                </Row>

            </div>
        );
    }
}
