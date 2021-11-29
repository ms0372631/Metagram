import React from "react";
import LeftCol from "./left_col/left_col";
import UserIndexContainer from './users/user_index_container';

const main = () => (
  <section className="main">
    <div className="wrapper">
      <LeftCol/>
      <UserIndexContainer/>
    </div>
  </section >
)

export default main;