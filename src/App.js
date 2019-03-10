import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  clickCount = id => {
    this.state.cards.map(cardobject => {
      if (cardobject.id === id) {

        if(cardobject.count === 0){
        cardobject.count = 1;
      
          this.setState({cards, score : this.state.score + 1, highscore:this.state.highscore+1});
        return 0;
        }
        if (cardobject.count=== 1){
          this.setState({score:0});
          return 1;
        }
      }
      return 1;
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;