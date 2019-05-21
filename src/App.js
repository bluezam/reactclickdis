//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import Zodiac from "./Zodiac.json";
import "./App.css";


class App extends Component {
  state = {
    Zodiac,
    clickedZodiac: [],
    score: 0
  };

  imageClick = event => {
    const currentZodiac = event.target.alt;
    const ZodiacAlreadyClicked =
      this.state.clickedZodiac.indexOf(currentZodiac) > -1;

    if (ZodiacAlreadyClicked) {
      this.setState({
        Zodiac: this.state.Zodiac.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedZodiac: [],
        score: 0
      });
        alert("You lost the race! Play again?");

    } else {
      this.setState(
        {
          Zodiac: this.state.Zodiac.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedZodiac: this.state.clickedZodiac.concat(
            currentZodiac
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              Zodiac: this.state.Zodiac.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedZodiac: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.Zodiac.map(Zodiac => (
            <FriendCard
              imageClick={this.imageClick}
              id={Zodiac.id}
              key={Zodiac.id}
              image={Zodiac.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;