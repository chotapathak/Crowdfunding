import React from "react";
import styles from "./SupportButton.module.css";
import OnBoard from "../action/Onboard";
const MetaMask = props => {
  return (
    <button className={{}} onClick={props.onClick}>
      {props.children}
      <OnBoard/>
    </button>
  );
};

export default MetaMask;