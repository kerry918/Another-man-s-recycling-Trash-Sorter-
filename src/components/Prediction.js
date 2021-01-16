import React, { Component } from "react";

const PREDICTION_KEY = "";
const PREDICTION_URL = "";
const IMGUR_API_ID = "";

class Prediction extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  async sendToMicrosoftPrediction(img_url) {
    let response = await fetch(PREDICTION_URL, {
      method: "POST",
      headers: {
        "Prediction-Key": PREDICTION_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Url: img_url,
      }),
    });
    let bodyText = JSON.parse(response["_bodyText"]);
    let predictions = bodyText["predictions"];
    this.setNewPrediction(predictions);
  }
  render() {
    return <div>hello</div>;
  }
}

export default Prediction;
