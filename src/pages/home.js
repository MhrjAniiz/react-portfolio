import Background from "../components/Background";
import Text from "../components/Text";

import React, { Component } from "react";

import Title from "../components/title";
import Button from "../components/button";
import "../components/button.css";

export default class home extends Component {
  
  render() {
    return (
      <div>
        <Background>
          <Text
            name="anish maharjan"
            description="I am a student focused to become a web developer"
          />
        </Background>
        <Title title="choose what you wanna see" />
        <Button />

    
      </div>
    );
  }
}
