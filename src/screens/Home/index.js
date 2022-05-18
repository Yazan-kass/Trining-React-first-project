import "./style.css";
import InputBox from "../../components/InputBox";
import List from "../../components/List";
import { Component } from "react";

class Home extends Component {
  state = {
    value: "",
    items: [
      {
        title: "watching a movie",
        id: Math.random() * 1000,
      },
      {
        title: "Playing football",
        id: Math.random() * 1000,
      },
      {
        title: "Reading a book",
        id: Math.random() * 1000,
      },
      {
        title: "Go to gym",
        id: Math.random() * 1000,
      },
    ],
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAdd = () => {
    this.setState({
      items: [
        {
          title: this.state.value,
          id: Math.random() * 20000,
        },
        ...this.state.items,
      ],
      value: "",
    });
  };

  handleDelete = (id) => {
    console.log(id);
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div className={"inner-container"}>
        <h1>List Task </h1>
        <InputBox
          value={this.state.value}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />
        <List items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Home;
