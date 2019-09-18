import React, { Component } from "react";
import { connect } from "react-redux";
import * as budgetFormActions from "../components/redux/budgetFormActions";
import Form from "./shared/Form";
import Label from "./shared/Label";
import Input from "./shared/Input";
import Button from "./shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      budget: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);

    this.setState({ budget: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(budgetFormActions.addBalance(event))
  // handleSubmit:
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetForm);
