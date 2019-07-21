import React, { Component } from "react";
import { Table } from 'reactstrap';
import axios from 'axios';

class MedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "METFORMIN",
          med_list: {
            instructions: "take after eating",
            frequency_num: "1 daily",
            q_taken: "50 out of 90",
            rx: "123456",
            expiration_date: "10/01/2020",
            refill_date: "12/20/2019",
            pharmacy_name : "walgreens",
            phone : "1-800-768-3110"
          }
        },
        {
          name: "METFORMIN",
          med_list: {
            instructions: "take after eating",
            frequency_num: "1 daily",
            q_taken: "50 out of 90",
            rx: "123456",
            expiration_date: "10/01/2020",
            refill_date: "12/20/2019",
            pharmacy_name : "walgreens",
            phone : "1-800-768-3110"
          }
        }
      ],
      another_state: "melissa"
    };


  }

  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }   
  // }

  // // our first get method that uses our backend api to
  // // fetch data from our data base
  // getDataFromDb = () => {
  //   fetch('http://localhost:3000/api/getData')
  //     .then((data) => data.json())
  //     .then((res) => this.setState({ data: res.data }));
  // }

  render() {
    let data = this.state.data;
    // let med_row = null;
    const med_rows = data.map((item) => {
      return (
        <tr>
          <th>{item.name}</th>
          <th>{item.med_list.frequency_num}</th>
          <th>{item.med_list.instructions}</th>
          <th>{item.med_list.q_taken}</th>
          <th>{item.med_list.expiration_date}</th>
          <th>{item.med_list.rx}</th>
          <th>{item.med_list.refill_date}</th>
          <th>{item.med_list.pharmacy_name}</th>
          <th>{item.med_list.phone}</th>
        </tr>
      );
    });

    return (
      <Table striped>
        <thead>
          <tr>
            <th>NAME</th>
            <th>FREQUENCY</th>
            <th>INSTRUCTIONS</th>
            <th>QUANTITY</th>
            <th>DISPOSE BY</th>
            <th>RX</th>
            <th>REFILL</th>
            <th>PHARMACY</th>
            <th>CONTACT</th>
          </tr>
        </thead>
        <tbody>
          {med_rows}
        </tbody>
      </Table>
    );
  }
}

export default MedTable;