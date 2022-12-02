import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaTrashAlt } from "react-icons/fa";

function ApplicationList({ items, removeItem }) {
  return (
    <>
      <ListGroup>
        {items.map((item, index) => {
          return (
            <ListGroup.Item key={index}>
              <span>
                {index + 1}. {item.appName} - {item.appLanguage}
              </span>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(item.id)}
              >
                <FaTrashAlt />
              </button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default ApplicationList;
