import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <Form onSubmit={props.handleSearch} className="searchBar">
      <Row>
        <Col sm={10}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Awesome Exercises You Should Know"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={2}>
          <Button
            variant="outline-secondary"
            type="submit"
            className="searchbutton"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
