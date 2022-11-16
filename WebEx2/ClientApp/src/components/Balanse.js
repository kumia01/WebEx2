import React, { Component } from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const option = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "rgba(2, 62, 115, 1)"
      },
      grid: {
        display: false
      }
    },
    y: {
      min: 0,
      max: 3500,
      ticks: {
        color: "rgba(2, 62, 115, 1)"
      },
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};
export const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgba(2, 62, 115, 1)",
      borderColor: "rgba(2, 62, 115, 1)",

      data: [3000, 3000, 3300, 2000, 1550, 2000, 2600, 3000]
    }
  ]
};


export class Balanse extends Component {
    static displayName = Balanse.name;

    render() {
        return (
            /* Balanse og Knapper */

            <Container>
                <Row fluid="true" className="align-items-center justify-content-center">
                    <Col fluid="true">
                        <p> Din bokførte saldo er: <br /><b>3, 000 NOK</b></p>
                    </Col>
                    <Col fluid="true">
                        <Button className="btn btn-outline" id="innskudd">+ Inskudd</Button>
                        <Button className="btn btn-primary" id="overføring">Overføring</Button>
                    </Col>
                </Row>

                <Row fluid="true" className="align-items-center justify-content-center">
                    <Col fluid="true">
                        <Line options={option} data={data} />
                    </Col>
                </Row>

                <Row fluid="true" className="align-items-center justify-content-center">
                    <Col fluid="true">
                        <p className="bi bi-clock-history"> Nylig aktvitet</p>
                        <p>
                            Logget inn 27.10.2022 23.30
                        </p>
                    </Col>
                    <Col fluid="true">
                        <p className="bi bi-arrow-repeat"> Cash Flow</p>
                        <p>Innskudd: Overføring NOK 3, 000.00 via Vipps</p>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}