import React, { Component } from 'react';
import { Chart as ChartJS, defaults } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';


export class Graph extends Component {
    static displayName = Graph.name;

    render() {
        return (
            <div>
                <Line
                    datasetIdKey='id'
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug'],

                    }}
                />
            </div>
        );
    }
}