import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function ApplicationList({ items, removeItem, editItem }) {
  return (
    <>
      <ListGroup>
        {items.map((item, index) => {
          return (
            <ListGroup.Item key={index}>
              <span>
                {index + 1}. {item.appName} - {item.appLanguage}
              </span>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => {
                    editItem(item.id);
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default ApplicationList;
