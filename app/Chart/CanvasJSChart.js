"use client";
import React, { Component } from "react";
import dynamic from "next/dynamic";

var CanvasJSChart = dynamic(() => import("@canvasjs/react-charts").then((mod) => mod.default.CanvasJSChart ), { ssr: false });  
 
class App extends Component {
    render() {
      const options = {
        title: {
          text: "Basic Column Chart in Next.js"
        },
        data: [{
          type: "column",
          dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
          ]
        }]
      }
              
      return (
        <div>
          <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
}
 
export default App;   