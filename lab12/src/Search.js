import React, { Component, Fragment } from "react";

import "./App.css";

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }


render() {
  return (
    <Fragment>
      <form>
  <label>
    <input type="text" name="search" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </Fragment>
  );
}
}

  

export default Search;