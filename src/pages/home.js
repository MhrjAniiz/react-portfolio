import Background from "../components/Background";
import Text from "../components/Text";
import Client from "../Contentful";
import React, { Component } from "react";
import Project from "../components/Project";
import {Data} from '../data';
import Skills from '../components/Skills'
import Title from '../components/title';
import Button from '../components/button'
import '../components/button.css'


export default class home extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData =async() => {
      let response = await Client.getEntries({
        content_type: "portfolio",
        order: "sys.createdAt",
      });
      this.setState({
        info: response.items
      });
    //   console.log(response.items);
 
  };
  render() {
    return (
      <div>
        <Background>
          <Text
            name="anish maharjan"
            description="I am a student focused to become a web developer"
          />
        </Background>
        <Title title="choose what you wanna see"/>
        <Button />
        
       
        <Skills data={Data}/>
        <Project data={this.state.info} />
      </div>
    );
  }
}
