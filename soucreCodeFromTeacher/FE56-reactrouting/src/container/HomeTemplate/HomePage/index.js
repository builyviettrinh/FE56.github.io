import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
class HomePage extends Component {
  render() {
    return (
      <div className="text-center">
        <h3>HomePage</h3>
        <Button
          className={this.props.classes.btnCuaTui}
          variant="outlined"
          color="primary"
        >
          Nút của tui
        </Button>
        <Button variant="contained" color="primary">
          Nhạc của tui
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(HomePage));
