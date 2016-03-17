import React from 'react';
import { analyzeText } from '../../server/utils/customTextAnalytics.js'


export default class TextAnalytics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dummyState: false,
    };
  }

  renderAnalytics = (string) => {
    const analyticsObj = analyzeText(string);
    let countEachWordResult = analyticsObj.allTotals;
    let topThreeWordsResult = analyticsObj.topThree;
    let results = [];
    for (let key in topThreeWordsResult) {
      results.push([key, ": " + topThreeWordsResult[key] + " times"]);
    }
    return results;
  }

  render() {
    let topThree = this.renderAnalytics(this.props.text).map(function(word){ return <li>{word}</li>});
    return (
      <div>
        <p>Here are your results:</p>
        <div>Top three words: {topThree}</div>
      </div>
    );
  }
}


/*

Text sample for testing:

hey hey hey how how how are you you you

*/
