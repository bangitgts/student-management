/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { connect } from "react-redux";
import Information from "../../components/Information/Information";
class Homepage extends Component {
  componentWillMount() {
    
  }
  render() {
    //TODO
    return <Information a={this.props.teachers[0].Phonenumber}/>;
  }
}
const mapStateToProps = (state) => {
  return {
    teachers: state.teachers,
  };
};
export default connect(mapStateToProps, null)(Homepage);
