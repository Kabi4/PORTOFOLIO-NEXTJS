import React, { Component } from "react";
import Layout from "../Components/Layout";
import fetch from 'isomorphic-unfetch';
import Error from './_error';

class About extends Component{

  static async getInitialProps(){
    const file = await fetch("https://api.github.com/users/kabi4");
    const statusCode =  file.status>200 ? file.status : false;
    const data = await file.json();
    return{
      user: data,
      err: statusCode
    }
  }
  render(){
    if(this.props.err){
      return <Error  statusCode={this.props.err}/>;
    }
    return (
      <Layout title="About">
        <br/>
        <h3>{this.props.user.name}</h3><br/>
        <img style={{height: "200px",width: "200px",objectFit: "contain"}} src={this.props.user.avatar_url} alt="kabi4" /><br/>
      </Layout>
    );
  }
};

export default About;
