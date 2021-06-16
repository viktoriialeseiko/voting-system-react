import React from "react";
import Team from "./components/Team";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [
        {
          name: "FC Barcelona",
          src:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png",
          voteCount: 0,
          isWinner: false
        },
        {
          name: "Juventus",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d-gGxaFm2gKKH7QkIWI8e92R8TyZ0sKYMQ&usqp=CAU",
          voteCount: 0,
          isWinner: false
        },
        {
          name: "Manchester United",
          src:
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
          voteCount: 0,
          isWinner: false
        }
      ]
    };
  }

  getCount = (name) => {
    const newTeams = this.state.teams.map((team) => {
      if (team.name === name) {
        team.voteCount++;
      }
      return team;
    });
    this.setState({ teams: newTeams }, () => {
      this.getWinner();
    });
  };

  getWinner = (voteCount) => {
    const max = Math.max(...this.state.teams.map((team) => team.voteCount));
    const newTeams = this.state.teams.map((team) => {
      if (team.voteCount === max) {
        team.isWinner = true;
      } else {
        team.isWinner = false;
      }
      return team;
    });
    this.setState({ teams: newTeams });
  };

  render() {
    const content = this.state.teams.map((team) => {
      return (
        <Team
          src={team.src}
          name={team.name}
          voteCount={team.voteCount}
          func={this.getCount}
          className={team.isWinner ? "winner" : ""}
        />
      );
    });
    return <div>{content}</div>;
  }
}

export default App;
