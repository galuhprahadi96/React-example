import React from 'react';
import { Jumbotron } from 'reactstrap';

const BlogDetail = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.location.data.judul}</h1>
        <span>Publish: {props.location.data.publish}</span>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      </Jumbotron>
    </div>
  );
};

export default BlogDetail;