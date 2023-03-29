import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Subtitle style={{paddingBottom :'10px'}}>{props.subTitle}</Card.Subtitle>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        <Card.Img variant="top" src={props.imgPath1} alt="card-img" />
        <Card.Img variant="top" src={props.imgPath2} alt="card-img" />
        <Card.Img variant="top" src={props.imgPath3} alt="card-img" />
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
