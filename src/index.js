import _ from "lodash";

import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
