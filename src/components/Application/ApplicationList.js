import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function ApplicationList() {
  const applicationList = useSelector((state) => state);
  return (
    <>
      <div className="applicationListContainer">
        <h3>Application List</h3>
        {applicationList.length > 0 ? (
          <>
            <ListGroup>
              {applicationList.map((application, index) => {
                return (
                  <ListGroup.Item key={index}>
                    <span>
                      {index + 1}. {application.appName} -
                      {JSON.stringify(application.languageList)}
                    </span>
                    <div className="btn-container">
                      <button
                        type="button"
                        className="edit-btn"
                        // onClick={() => {
                        //   editItem(application.id);
                        // }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        className="delete-btn"
                        // onClick={() => removeItem(application.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </>
        ) : (
          "List is empty."
        )}
      </div>
    </>
  );
}

export default ApplicationList;
