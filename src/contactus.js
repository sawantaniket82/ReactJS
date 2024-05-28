import React from "react";
import "./styles.css";

export default class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: null
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  // handleSubmit = () => {
  //   alert("Form submitted successfully" + this.state);
  //   fetch("http://localhost:3000/store_data", {
  //     method: "POST",
  //     body: JSON.stringify(this.state)
  //   }).then(function (response) {
  //     console.log(response);
  //     return response.json();
  //   });
  //   event.preventDefault();
  // };
  render() {
    return (
      <div className="container">
        <h2>Contact Form</h2>
        <form action="C:/wamp64/www/contactus.php" method="get">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="eg:-Aniket"
            required
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <br />
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="eg:-xyz@gmail.com"
            required
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <br />
          Message
          <textarea
            name="message"
            id="message"
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
          <br />
          <br />
          <input
            type="submit"
            value="submit"
            onClick={(e) => this.handleFormSubmit(e)}
          />
        </form>
      </div>
    );
  }
}
