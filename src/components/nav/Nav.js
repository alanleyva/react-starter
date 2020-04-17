import React, { Component } from "react";
const defButtonClasses = ["btn", "btn-lg"];
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: true,
      toggled_b: false,
      toggledFirst: false,
      assignedClasses: [
        "navbar",
        "navbar-expand-md",
        "fixed-top",
        "main_navbar",
        "invert",
        "scroll"
      ],
      buttonClasses: [...defButtonClasses]
    };
  }
  componentDidMount() {
    ///uncomment to make transition
    // this.updateTransapency();
    // /// top nav animation
    // document.getElementsByTagName("body")[0].onscroll = () => {
    //   this.updateTransapency();
    // };
  }

  updateTransapency = () => {
    const assignedClasses = [...this.state.assignedClasses];
    const newButtonClasses = [...defButtonClasses];
    let scroll_value =
      document.documentElement.scrollTop || document.body.scrollTop;
    scroll_value =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (
      (!this.state.toggledFirst && scroll_value >= 145) ||
      (scroll_value > 145 && this.state.toggled_b)
    ) {
      assignedClasses.pop();
      assignedClasses.push("material-shadows");
      newButtonClasses.push("btn-primary");
      this.setState({
        toggled_b: false,
        toggled: true,
        toggledFirst: true,
        assignedClasses,
        buttonClasses: newButtonClasses
      });
    } else if (scroll_value <= 80 && this.state.toggled) {
      newButtonClasses.push("btn-light");
      assignedClasses.pop();
      assignedClasses.push("transparent");
      this.setState({
        toggled_b: true,
        toggled: false,
        assignedClasses,
        buttonClasses: newButtonClasses
      });
    }
  };

  render() {
    return (
      <nav className={this.state.assignedClasses.join(" ")} id="main_navbar">
        <a className="navbar-brand smooth_scroll" href="#section_1">
          Project
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link smooth_scroll" href="#servicios">
                Nav 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link smooth_scroll" href="#brackets_tipos">
                Nav 2
              </a>
            </li>
          </ul>
        </div>
        <div className="d-md-flex d-none align-items-center justify-content-between"></div>
      </nav>
    );
  }
}

export default Nav;
