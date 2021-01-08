import React from "react";
import { Col, Container, Row } from "reactstrap";
import Blog from "./Blog/Blog";

function BlogPage() {
  return (
    <Container>
      <Row>
        <Col><Blog id="1" judul="Tutorial Blog 1" publish="21/03/2019"/></Col>
        <Col><Blog id="2" judul="Tutorial Blog 2" publish="21/04/2019"/></Col>
        <Col><Blog id="3" judul="Tutorial Blog 3" publish="21/05/2019"/></Col>
        <Col><Blog id="4" judul="Tutorial Blog 4" publish="21/06/2019"/></Col>
      </Row>
    </Container>
  );
}

export default BlogPage;
