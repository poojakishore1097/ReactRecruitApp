import React from "react";
import idGenerator from "react-id-generator";
//import { Dropdown } from '@fluentui/react-northstar'

export default class App extends React.Component {
  state = {
    employees: [],
    levelname: "",
    practicegroup: "",
    program: "",
    region: "",
    worklocation: "",
    position: "",
    approvalmode: "",
    id: 0,
    create: true
  };

  componentDidMount() {
    //Intializing sample data
    const emps = [
      {
        levelname: 1,
        practicegroup: "9901-PSG",
        program: "PSG",
        region: "India",
        worklocation: "Coimbatore",
        position: "Junior Associate",
        approvalmode: "Sequential",
        id: 0
      },
      {
        levelname: 2,
        practicegroup: "9901-PMO",
        program: "PMO",
        region: "India",
        worklocation: "Coimbatore",
        position: "Associate",
        approvalmode: "Sequential",
        id: 0
      }
    ];
    this.setState({
      employees: emps.map((e) => {
        return {
          levelname: e.levelname,
          practicegroup: e.practicegroup,
          program: e.program,
          region: e.region,
          worklocation: e.worklocation,
          position: e.position,
          approvalmode: e.approvalmode,
          id: idGenerator()
        };
      })
    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleCreateEmployee = () => {
    if (this.state.employees) {
      this.setState({
        employees: [
          ...this.state.employees,
          {
            levelname: this.state.levelname,
            practicegroup: this.state.practicegroup,
            program: this.state.program,
            region: this.state.region,
            worklocation: this.state.worklocation,
            position: this.state.position,
            approvalmode: this.state.approvalmode,
            id: idGenerator()
          }
        ]
      });
    } else {
      this.setState({
        employees: [
          {
            levelname: this.state.levelname,
            practicegroup: this.state.practicegroup,
            program: this.state.program,
            region: this.state.region,
            worklocation: this.state.worklocation,
            position: this.state.position,
            approvalmode: this.state.approvalmode,
            id: idGenerator()
          }
        ]
      });
    }
    this.setState({
      levelname: "",
      practicegroup: "",
      program: "",
      region: "",
      worklocation: "",
      position: "",
      approvalmode: ""
    });
  };

  handleEdit = (e) => {
    const employee = this.state.employees.find(function (emp) {
      if (emp.id === e.target.id) {
        return emp;
      }
    });
    this.setState({
      levelname: employee.levelname,
      practicegroup: employee.practicegroup,
      program: employee.program,
      region: employee.region,
      worklocation: employee.worklocation,
      position: employee.position,
      approvalmode: employee.approvalmode,
      id: employee.id,
      create: false
    });
  };
  handleDelete = (e) => {
    this.setState({
      employees: this.state.employees.filter(function (emp) {
        if (emp.id !== e.target.id) return emp;
      })
    });
  };
  handleUpdateEmployee = () => {
    const employee = {
      levelname: this.state.levelname,
      practicegroup: this.state.practicegroup,
      program: this.state.program,
      region: this.state.region,
      worklocation: this.state.worklocation,
      position: this.state.position,
      approvalmode: this.state.approvalmode,
      id: this.state.id
    };
    const employeesupdated = this.state.employees.map((emp) => {
      if (emp.id === this.state.id) {
        return employee;
      } else return emp;
    });

    this.setState((prevStae, props) => ({
      employees: employeesupdated,
      create: true,
      levelname: "",
      practicegroup: "",
      program: "",
      region: "",
      worklocation: "",
      position: "",
      approvalmode: ""
    }));
  };

  render() {
    const create = this.state.create ? "Add Approval" : "Update";
    const { employees } = this.state;
    const inputIsEmpty =
      this.state.levelname === "" ||
      this.state.practicegroup === "" ||
      this.state.program === "" ||
      this.state.region === "" ||
      this.state.worklocation === "" ||
      this.state.position === "" ||
      this.state.approvalmode === ""
        ? true
        : false;
    return (
      <div>
        <h2>Requisition Approval</h2>
        <form>
          <label for="levelname">Level Name:</label>
          <input
            style={{ width: 150 }}
            class="inputleavename"
            type="text"
            label="levelname"
            placeholder=""
            onChange={this.handleChange}
            name="levelname"
            value={this.state.levelname}
          />{" "}
          <br />
          <label for="practicegroup">Practice Group:</label>
          <select
            style={{ width: 150, margin: 6 }}
            type="text"
            class="inputtext"
            placeholder="--- Please Select ---"
            onChange={this.handleChange}
            name="practicegroup"
            value={this.state.practicegroup}
          >
            {" "}
            <option value="">---Please Select---</option>
            <option value="PSG">PSG</option>
            <option value="PMO">PMO</option>
            <option value="Quality Analysis">Quality Analysis</option>
            <option value="SAP">SAP</option>
          </select>{" "}
          <br />
          <label for="program"> Program:</label>
          <select
            style={{ width: 150 }}
            class="inputprogram"
            type="text"
            placeholder="Enter program"
            onChange={this.handleChange}
            name="program"
            value={this.state.program}
          >
            {" "}
            <option value="">---Please Select---</option>
            <option value="9001-PSG">9001-PSG</option>
            <option value="9002-PMO">9002-PMO</option>
            <option value="9003-Quality Analysis">9003-Quality Analysis</option>
            <option value="9004-SAP">9004-SAP</option>
          </select>{" "}
          <br />
          <label for="region"> Region </label>
          <select
            style={{ width: 150 }}
            class="inputregion"
            type="text"
            placeholder="Enter region"
            onChange={this.handleChange}
            name="region"
            value={this.state.region}
          >
            {" "}
            <option value="">---Please Select---</option>
            <option value="India">India</option>
            <option value="Thailand">Thailand</option>
            <option value="Singapore">Singapore</option>
            <option value="Malaysia">Malaysia</option>
          </select>{" "}
          <br />
          <label for="worklocation"> Work Location:</label>
          <select
            id="worklocation"
            style={{ width: 150, margin: 6 }}
            class="inputprogram"
            type="text"
            placeholder="Enter worklocation"
            onChange={this.handleChange}
            name="worklocation"
            value={this.state.worklocation}
          >
            <option value="">---Please Select---</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>{" "}
          <br />
          <label for="position"> Position:</label>
          <select
            style={{ width: 150 }}
            class="inputposition"
            type="text"
            placeholder="Enter position"
            onChange={this.handleChange}
            name="position"
            value={this.state.position}
          >
            {" "}
            <option value="">---Please Select---</option>
            <option value="Junior Associate">Junior Associate</option>
            <option value="Senior Associate">Senior Associate</option>
            <option value="Project Lead">Project Lead</option>
            <option value="Project Manager">Project Manager</option>
          </select>{" "}
          <br />
          <label for="approvalmode"> Approval Mode:</label>
          <select
            style={{ width: 150 }}
            type="text"
            class="inputtext"
            placeholder="Enter approvalmode"
            onChange={this.handleChange}
            name="approvalmode"
            value={this.state.approvalmode}
          >
            {" "}
            <option value="">--- Please Select ---</option>
            <option value="Sequential">Sequential</option>
            <option value="Non-Sequential">Non-Sequential</option>
          </select>{" "}
          <br />
          <button
            style={{ Width: 20 }}
            class="button"
            //text-align:center
            backgroundColor="#ff5c5c"
            disabled={inputIsEmpty}
            onClick={
              this.state.create
                ? this.handleCreateEmployee
                : this.handleUpdateEmployee
            }
          >
            {create}
          </button>
        </form>
        <br />
        <table border="1" style={{ width: 400, paddingTop: 5 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Level</th>
              <th>Practice Group</th>
              <th>Program</th>
              <th>Region</th>
              <th>Work Location</th>
              <th>Position</th>
              <th>Approval Mode</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => {
              return (
                <tr key={i}>
                  <td>{emp.id}</td>
                  <td>{emp.levelname}</td>
                  <td>{emp.practicegroup}</td>
                  <td>{emp.program}</td>
                  <td>{emp.region}</td>
                  <td>{emp.worklocation}</td>
                  <td>{emp.position}</td>
                  <td>{emp.approvalmode}</td>

                  <td>
                    <button onClick={this.handleEdit} id={emp.id}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      class="buttondelete"
                      onClick={this.handleDelete}
                      id={emp.id}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
//export default DropdownExampleMultiple
