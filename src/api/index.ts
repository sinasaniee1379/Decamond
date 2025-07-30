import { IUserResponse } from "@/types";
import { handleError } from "@/utils/commonFunc";
import { successMessage } from "@/utils/message";
import axios, { AxiosError } from "axios";

export const GetLoginService = async () => {
  try {
    const res = await axios
      .get<IUserResponse>("https://randomuser.me/api/?results=1&nat=us")
      .then(({ data }) => data);
    successMessage("Welcome to panel");
    localStorage.setItem("userId", res.results[0].login.uuid);
    return { data: res, status: true };
  } catch (error) {
    return handleError(error as AxiosError);
  }
};
