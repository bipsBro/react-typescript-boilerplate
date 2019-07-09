import React from "react";
import { RouteComponentProps } from "react-router-dom";

const NotFoundPage = ({ location }: RouteComponentProps) => (
  <div>
    <h3>
      {"No match for "}
      <a href={`#${location.pathname}`}>{location.pathname}</a>
    </h3>
  </div>
);

export default NotFoundPage;
