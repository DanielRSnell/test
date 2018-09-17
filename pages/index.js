import React, { Component } from "react";
import { Row, Col, Input, Button, Table } from "antd";
import Layout from "../components/layout";
import withData from "../lib/withData";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const SEARCH = gql`
  query SearchResults($query: String!, $limit: Int!) {
    SearchLocations(query: $query, limit: $limit) {
      RegionID
      RegionName
      RegionNameLong
      _id
    }
  }
`;

class Index extends Component {
  state = {
    data: [],
    search: null,
    limit: 10
  };

  updateSearch(value) {
    this.setState({ search: value });
  }

  createResults(data) {
    return Object.values(data).forEach(item => {
      <Col span={4}>
        {item.RegionID} - {item.RegionName}
      </Col>;
    });
  }

  render() {
    const Columns = [
      {
        title: "ID",
        dataIndex: "RegionID",
        key: "RegionID"
      },
      {
        title: "Region",
        dataIndex: "RegionName",
        key: "RegionName"
      },
      {
        title: "Extended",
        dataIndex: "RegionNameLong",
        key: "RegionNameLong"
      },
      {
        title: "View",
        render: x => <Button onClick={e => console.log(x)}>View Resorts</Button>
      }
    ];

    return (
      <Layout title="Home">
        <Row
          type="flex"
          justify="center"
          align="center"
          style={{ marginTop: "2rem" }}
        >
          <Col span={8}>
            <Input
              placeholder="Search Locations"
              style={{ minWidth: "200px", marginBottom: "1rem" }}
              onChange={e => this.updateSearch(e.target.value)}
            />
          </Col>
        </Row>
        {this.state.search !== null ? (
          <Query
            query={SEARCH}
            variables={{ query: this.state.search, limit: this.state.limit }}
          >
            {({ loading, error, data }) => {
              const { SearchLocations } = data;
              const result = SearchLocations;
              if (loading) return "Loading...";
              if (error) return "Please update search";
              return (
                <Row style={{ margin: "2rem" }}>
                  <Table
                    rowKey={x => x._id}
                    pagination={{ pageSize: 25 }}
                    dataSource={result}
                    columns={Columns}
                  />
                </Row>
              );
            }}
          </Query>
        ) : null}
      </Layout>
    );
  }
}

export default withData(Index);
