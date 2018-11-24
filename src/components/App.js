import React, { Component } from 'react';
import kitty from '../images/small.jpg';
import CARICON from '../images/icons/car-side.svg';
import {environment} from './constants.json';
import Data from './data.xml';
import Print from './Print';

export default class App extends Component {
    //Comments are removed using the minify option provided under webpack plugin: HtmlWebpackPlugin :)
    render() {
        Print();
        return (
            <div>
                <h1>Hello World!!</h1>
                <h2>This page is under trial ... </h2>
                <h4 className="tagline">Style classes injected at index.js file can be used in react components.</h4>
                <p className="applyCustomFontFamily">The font style for this line is being injected via @font-face</p>
                <p>The kitty comes from <strong>file-loader</strong> !!<img src={kitty} className="fixedBox" /></p>
                <p>The following icon has been loaded.. Thanks to <em>file-loader</em> !!
                <img src={CARICON} className="fixedBox"/></p>
                <h4>data loading...</h4>
                <p>A JSON file can be loaded without any loaders !!</p>
                <p>{environment}</p>
                <p>Data from XML file is loaded here... Whats interesting is that the imported data can be used as a <strong>JS object </strong>!!</p>
                <p>{Data.note.to}  {Data.note.from}  {Data.note.heading}  {Data.note.body} :)</p>
            </div>
        )
    }
}