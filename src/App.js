import React from 'react';
import Plot from 'react-plotly.js';

var trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 
  y: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 
  fill: "tozerox", 
  fillcolor: "rgba(0,100,80,0.2)", 
  line: {color: "transparent"}, 
  name: "Fair", 
  showlegend: false, 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 
  y: [5.5, 3, 5.5, 8, 6, 3, 8, 5, 6, 5.5, 4.75, 5, 4, 7, 2, 4, 7, 4.4, 2, 4.5], 
  fill: "tozerox", 
  fillcolor: "rgba(0,176,246,0.2)", 
  line: {color: "transparent"}, 
  name: "Premium", 
  showlegend: false, 
  type: "scatter"
};
var trace3 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 
  y: [11, 9, 7, 5, 3, 1, 3, 5, 3, 1, -1, 1, 3, 1, -0.5, 1, 3, 5, 7, 9], 
  fill: "tozerox", 
  fillcolor: "rgba(231,107,243,0.2)", 
  line: {color: "transparent"}, 
  name: "Fair", 
  showlegend: false, 
  type: "scatter"
};
var trace4 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  line: {color: "rgb(0,100,80)"}, 
  mode: "lines", 
  name: "Fair", 
  type: "scatter"
};
var trace5 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  y: [5, 2.5, 5, 7.5, 5, 2.5, 7.5, 4.5, 5.5, 5], 
  line: {color: "rgb(0,176,246)"}, 
  mode: "lines", 
  name: "Premium", 
  type: "scatter"
};
var trace6 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  y: [10, 8, 6, 4, 2, 0, 2, 4, 2, 0], 
  line: {color: "rgb(231,107,243)"}, 
  mode: "lines", 
  name: "Ideal", 
  type: "scatter"
};

var traces = [trace1, trace2, trace3, trace4, trace5, trace6];

class App extends React.Component {


  render() {
    return (
      <Plot
        data={traces}
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
        layout={ {autosize: true,
          paper_bgcolor: "#eee",
          plot_bgcolor: "#EEE",
          font: {
            family: 'Inter, monospace',
            size: 18,
            color: '#7f7f7f'
          }} }
      />
    );
  }
}

export default App;