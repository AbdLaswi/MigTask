import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";
export default function RentField() {
  const url = window.location.href.split("/");
  let id = url[url.length - 1][0];
  const [data, setData] = useState({
    renter: "",
    rent_date_start: "",
    rent_date_end: "",
    car_id: id,
  });
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("/rented", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Update Lease</Popover.Title>
      <Popover.Content>
        The Lease Has been Created Check Your List Please
      </Popover.Content>
    </Popover>
  );

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          onChange={(e) => setData({ ...data, renter: e.target.value })}
          value={data.renter}
          required
          style={{ width: "20%" }}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{ marginRight: "12px" }}>From</Form.Label>
        <input
          type="date"
          onChange={(e) =>
            setData({ ...data, rent_date_start: e.target.value })
          }
          value={data.rent_date_start}
          required
          style={{ width: "225px" }}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{ marginRight: "30px" }}>To</Form.Label>
        <input
          type="date"
          onChange={(e) => setData({ ...data, rent_date_end: e.target.value })}
          value={data.rent_date_end}
          required
          style={{ width: "230px" }}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Text className="text-muted">
          We'll never share your data with anyone else.
        </Form.Text>
      </Form.Group>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button
          variant="primary"
          type="submit"
          onClick={handleClick}
          style={{ marginLeft: "10%" }}
        >
          Rent
        </Button>
      </OverlayTrigger>
    </Form>
  );
}
