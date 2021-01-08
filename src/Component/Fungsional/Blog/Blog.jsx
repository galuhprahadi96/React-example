import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Blog = (props) => {
  return (
    <div>
      <Card>
        <CardImg src="https://placeimg.com/300/180/tech" />
        <CardBody>
          <CardTitle tag="h5">{props.judul}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Publish: {props.publish}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>
              <Link to={
                  {
                      pathname: `/detail/${props.id}`,
                      data: {
                          judul: props.judul,
                          publish: props.publish
                      }
                  }
                }>
                Detail
              </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Blog
