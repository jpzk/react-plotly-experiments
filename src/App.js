import React from 'react';
import Plot from 'react-plotly.js';

var trace6 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  y: [10, 8, 6, 4, 2, 0, 2, 4, 2, 0], 
  line: {color: "rgb(231,107,243)"}, 
  mode: "lines", 
  name: "Ideal", 
  type: "scatter"
};


var traces = [trace6];

class App extends React.Component {

  render() {
    return (
      <Plot
        data={traces}
        useResizeHandler  x
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