/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./app";

const root = document.getElementById("solid-app");

render(() => <App />, root!);
