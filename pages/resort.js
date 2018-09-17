import React, { Component } from "react";
import Layout from "../components/layout";
import withData from "../lib/withData";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class Resort extends Component {
  render() {
    return (
      <Layout title="Region">
        <p>This is just a test page...</p>
      </Layout>
    );
  }
}

export default withData(Resort);
