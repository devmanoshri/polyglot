import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
function ApplicationList({ items }) {
  return (
    <>
      <ListGroup>
        {items.map((item, index) => {
          return (
            <ListGroup.Item key={index}>
              {index + 1}. {item.appName} - {item.appLanguage}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <button className="clear-btn"> Clear Items</button>
    </>
  );
}

export default ApplicationList;
