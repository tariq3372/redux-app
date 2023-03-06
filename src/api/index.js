import axios from "axios";
import { BASE_URL } from "./baseURl";

export const getUser = () =>
  axios.get(
    `${BASE_URL}todos/1`
  );