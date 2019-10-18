import React, { Component, Fragment } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { css } from "emotion";
import ErrorBoundary from "../Error/ErrorBoundary";

class Home extends Component {
  state = {
    hasError: false,
    errorMessage: "",
    users: [],
    options: {
      chart: {
        id: ""
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: "Heights",
        data: []
      }
    ]
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_NODE_LOCALHOST}/users?limit=20&offset=0`)
      .then(res => {
        console.log(res.data);

        this.setState({ users: res.data });

        // x axis = weights
        const weightData = this.extractToArray(
          this.state.users,
          "starting_weight"
        );

        // y axis = heights
        const heightData = this.extractToArray(this.state.users, "height");

        // set xaxis (aka categories)
        this.setState(prevState => ({
          ...prevState, // dig 1
          options: {
            chart: { id: "" },
            ...prevState.xaxis, // dig 2
            xaxis: {
              ...prevState.xaxis, // dig 3
              categories: weightData
            }
          }
        }));

        // set yaxis (aka series)
        this.setState(prevState => ({
          ...prevState,
          series: [{ ...prevState.series[0].name, data: heightData }]
        }));
      })
      .catch(err => {
        this.setState({
          hasError: true,
          errorMessage: Object(err.response).hasOwnProperty("data")
            ? err.response.data.message
            : ""
        });
      });
  }

  extractToArray = (arr, attribute) => {
    return arr.reduce((container, currentItem) => {
      container.push(currentItem[attribute]);
      return container;
    }, []);
  };

  render() {
    return this.state.hasError ? (
      <Fragment>
        <h4>Error Loding Home Page</h4>
        <p>{this.state.errorMessage}</p>
      </Fragment>
    ) : (
      <Fragment>
        <div
          className={css`
            margin: 0;
            padding: 0;
          `}
        >
          <h1>Welcome Home</h1>
          <div
            className={css`
              display: flex;
              justify-content: center;
              text-align: center;
            `}
          >
            <p
              className={css`
                writing-mode: vertical-rl;
                text-orientation: upright;
              `}
            >
              Height
            </p>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={500}
              height={320}
            />
          </div>
          <p
            className={css`
              margin: 0;
              padding: 0;
            `}
          >
            Weight
          </p>
        </div>
      </Fragment>
    );
  }
}

export default function HomeWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Home {...props} />
    </ErrorBoundary>
  );
}
