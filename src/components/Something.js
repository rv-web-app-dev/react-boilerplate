import React, { Component } from "react";
import kitty from "../images/small.jpg";
import CARICON from "../images/icons/car-side.svg";
import { environment } from "./constants.json";
import constants from './constants.json';
import Data from "./data.xml";
import Print from "./Print";

export default class Something extends Component {
  //Comments are removed using the minify option provided under webpack plugin: HtmlWebpackPlugin :)
  render() {
    Print();
    return (
      <div>
        <h1>Hello World!!</h1>
        <h2>This page is under trial ... </h2>
        <h4 className="tagline">
          Style classes injected at index.js file can be used in react
          components.
        </h4>
        <p className="applyCustomFontFamily">
          The font style for this line is being injected via @font-face
        </p>
        <p className="use-custom-font">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur
        </p>

        <div className="fl-demo">
          <p>
            The kitty comes from <strong>file-loader</strong> !!
            <img src={kitty} className="img-width--fixed" />
          </p>
        </div>

        <div className="fl-demo">
          <p>
            The following icon has been loaded.. Thanks to <em>file-loader</em>{" "}
            !!
            <img src={CARICON} className="img-width--fixed" />
          </p>
        </div>

        <div className="json-file--demo">
          <h4>Data loaded below is from a JSON file</h4>
          <p>A JSON file can be loaded without any loaders !!</p>
          <div></div>
          <div className="form-2Column">
            <div>
              <label>Environment</label>
            </div>
            <div>
              <input value={environment} />
            </div>
          </div>
          <div className="form-2Column">
            <div>
              <label>Number</label>
            </div>
            <div>
              <input value={constants.number} />
            </div>
          </div>
          <div className="form-2Column">
            <div>
              <label>Array</label>
            </div>
            <div>
              <input value={constants.array} />
            </div>
          </div>
          <div className="form-2Column">
            <div>
              <label>Level2</label>
            </div>
            <div>
              <textarea value={constants.level1.level2} />
            </div>
          </div>
          <div className="form-2Column">
            <div>
              <label>Level3</label>
            </div>
            <div>
              <textarea value={constants.level1.level2a.level3} />
            </div>
          </div>
        </div>

        <div className="xml-file--demo">
          <p>
            Data from XML file is loaded here... Whats interesting is that the
            imported data can be used as a <strong>JS object </strong>!!
          </p>
          <p>
            {Data.note.to} {Data.note.from} {Data.note.heading} {Data.note.body}{" "}
            :)
          </p>
        </div>
        
      </div>
    );
  }
}
