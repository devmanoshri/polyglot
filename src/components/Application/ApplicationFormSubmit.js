import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_application } from "../../actions/index";
// const [application, setApplication] = useState({
//   appName: "",
//   appLanguage: {},
// });
// const setAppName = (e) => {
//   setApplication((existingValue) => ({
//     ...existingValue,
//     appName: e.target.value,
//   }));
// };

const handelSubmit = (event) => {
  event.preventDefault();
  console.log("form submitted");
  //console.log(application.appName);
  // if (isValidData()) {
  //   saveData();
  // }
};

const isValidData = () => {};

const saveData = () => {};
export default handelSubmit;
