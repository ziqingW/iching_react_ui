const clone = require('clone');

var initialState = {
            user : "",
            guas : {},
            changingLines : [],
            toGua : {},
            coins : [],
            question: "",
            userId : 0
        };

export function guas (state, action) {
  if (state === undefined) {
    return initialState;
  }
  var new_state;
  var coinsResults = [];
    switch (action.type) {
      case 'SET_USER':
          new_state = clone(state);
          new_state.user = action.data.username;
          new_state.userId = action.data.userId;
          return new_state;
      case 'ASK_GUA':
          new_state = clone(state);
          new_state.guas = action.data.from;
          new_state.changingLines = action.data.changingLines;
          new_state.toGua = action.data.to;
          new_state.question = action.data.question;
          let originLines = new_state.guas.lines;
          for (let i = 0; i < originLines.length; i ++) {
            if (originLines[i] === 0) {
              if (new_state.changingLines[i] === 0) {
                coinsResults.push("h1t2.png");
              } else {
                coinsResults.push("t3.png");
              }
            } else {
              if (new_state.changingLines[i] === 0) {
                coinsResults.push("h2t1.png");
            } else {
              coinsResults.push("h3.png");
            }
        }
      }
        new_state.coins = coinsResults;
        return new_state;
    default:
      return state;
  }
}

export default guas;