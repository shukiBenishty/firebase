import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils.js";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  componentDidMount(){
    this.setState({
      data: this.props.data
    })
  }
  render() {

    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Address",
              columns: [
                {
                  Header: "City",
                  accessor: "address.city"
                },
                {
                  Header: "Street",
                  accessor: "address.street"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

export default Example
