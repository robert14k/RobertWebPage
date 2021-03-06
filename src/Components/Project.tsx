import React, { Component } from "react";
import ProjectEntity from "../Modals/ProjectEntity";
import { List, Card, Divider, Row, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import "../Style.css";
export interface IProjectProps {
  isMobile: boolean;
  projects: ProjectEntity[];
}

export interface IProjectState {
  //none
}

export default class Project extends Component<IProjectProps, IProjectState> {
  static defaultProps = {};

  state: IProjectState = {};

  projectRender = (entity: ProjectEntity) => {
    if (this.props.isMobile) {
      return (
        <>
          <a href={entity.link} style={{ margin: "20px" }}>
            <Card
              style={{
                height: "auto",
                backgroundColor: "#FFFFFF",
                borderColor: "#ECECEC",
                alignContent: "center"
              }}
              hoverable
              cover={
                <img
                  style={{ width: "100%" }}
                  alt="example"
                  src={entity.picture}
                />
              }
            >
              <Divider />
              <Meta
                className="bodyTextFont"
                title={entity.title}
                description={entity.description}
              />
            </Card>
          </a>
        </>
      );
    } else {
      if (entity.isLeft) {
        return (
          <>
            <a href={entity.link} style={{ margin: "20px" }}>
              <Card
                style={{
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#ECECEC",
                  alignContent: "center"
                }}
                hoverable
              >
                <Row gutter={8}>
                  <Col xxl={8} xl={10} lg={12} md={13}>
                    <img
                      style={{ width : "100%" }}
                      alt="example"
                      src={entity.picture}
                    /> 
                  </Col>
                  <Col xxl={16} xl={14} lg={12} md={11}>
                    <Row className="cardHeader">{entity.title}</Row>
                    <Divider />
                    <Row className="cardBody">{entity.description}</Row>
                  </Col>
                </Row>
              </Card>
            </a>
          </>
        );
      } else {
        return (
          <>
            <a href={entity.link} style={{ margin: "20px" }}>
              <Card
                style={{
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#ECECEC",
                  alignContent: "center"
                }}
                hoverable
              >
                <Row gutter={8}>
                  <Col xxl={16} xl={14} lg={12} md={11}>
                    <Row className="cardHeader">{entity.title}</Row>
                    <Divider />
                    <Row className="cardBody">{entity.description}</Row>
                  </Col>
                  <Col xxl={8} xl={10} lg={12} md={13}>
                    <img
                      style={{ width: "100%" }}
                      alt="example"
                      src={entity.picture}
                    />
                  </Col>
                </Row>
              </Card>
            </a>
          </>
        );
      }
    }
  };

  render() {
    return (
      <List
        dataSource={this.props.projects}
        renderItem={item => <List.Item>{this.projectRender(item)}</List.Item>}
      />
    );
  }
}
