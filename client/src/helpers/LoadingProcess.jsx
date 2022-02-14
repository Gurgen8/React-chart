import React from 'react';
import "./loadingProcess.scss";
import { Spinner } from "react-bootstrap"

export default function LoadingProcess() {
  return (
    <div className="loading-process">
      <div className="spiner-div">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="light" />
      </div>
    </div>
  )
}
