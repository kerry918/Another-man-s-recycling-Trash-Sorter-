import React, { Component } from "react";
//import { Typography } from "@material-ui/core";
import FileBase from "react-file-base64";

const PREDICTION_KEY = "e2b4be276a0340c39f46725c007ccc28";
const PREDICTION_URL =
  "https://trashsorter.cognitiveservices.azure.com/customvision/v3.0/Prediction/df018c59-a72a-4dd6-9753-6e39b27a4ff9/classify/iterations/TrashSorter_first/url";
const IMGUR_API_ID = "4b8938d00e2458f";

class Prediction extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tagText: "trash sorter",
    data: [],
    imageUpload: "",
  };

  async sendToImgur(photoLoc) {
    try {
      // Use Image Manipulator to downsize image
      // let manipulatedObj = await ImageManipulator.manipulateAsync(
      //let manipulatedObj = photoLoc;
      //   photoLoc,
      //   [{ resize: { width: 200 } }],
      //   { base64: true }
      // );
      var xmlHttp = new XMLHttpRequest();
      const data = new FormData();
      xmlHttp.onreadystatechange = (e) => {
        if (xmlHttp.readyState === 4) {
          if (xmlHttp.status === 200) {
            // Send Imgur link to photo to be sent to Prediction API
            let imgur_json = JSON.parse(xmlHttp.responseText);
            this.sendToMicrosoftPrediction(imgur_json.data.link);
          } else {
            // Debug errors
            console.log(xmlHttp.responseJson);
          }
        }
      };
      xmlHttp.open("POST", "https://api.imgur.com/3/upload", true);
      xmlHttp.setRequestHeader("Authorization", "Client-ID " + IMGUR_API_ID);
      data.append("type", "base64");
      data.append("image", photoLoc.base64);
      xmlHttp.send(data);
    } catch (error) {
      console.error(error);
    }
  }

  sendToMicrosoftPrediction = async (img_url) => {
    let data = await fetch(PREDICTION_URL, {
      method: "POST",
      headers: {
        "Prediction-Key": PREDICTION_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Url: "https://i.imgur.com/wVVZMLt.jpg",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
        console.log("this is the json data", data);
      });
    //let predictions = bodyText["predictions"];
    //this.setNewPrediction(predictions);
  };

  logState = () => {
    console.log(this.state);
  };
  parseJson = (response) => {
    let bodyText = response;
    console.log(bodyText);
  };

  setNewPrediction = (predictions) => {
    let maxProb = 0;
    let bestTag = "None";
    for (let predMap of predictions) {
      if (predMap.probability > maxProb) {
        maxProb = predMap.probability;
        bestTag = predMap.tagName;
      }
    }
    this.setState({
      tagText: `AI says: ${bestTag}\nProbability: ${maxProb.toString()}`,
    });
    this.resetPredictionInterval = setInterval(
      this.resetPredictionText.bind(this),
      20000
    );
  };
  imageChange = (e) => {
    let img = e.target.files;
    this.sendToImgur(img);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div>trash sorter</div>
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              base64 = base64.split(",").pop();
              this.setState({
                imageUpload: base64,
              });
              this.sendToImgur(base64);
            }}
          />
          {/* <input
            type="file"
            className="input-image"
            onChange={this.sendToMicrosoftPrediction.bind(this)}
          /> */}
          <div></div>
        </div>
      </div>
    );
  }
}

export default Prediction;
