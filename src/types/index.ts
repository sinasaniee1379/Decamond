import { AxiosResponse } from "axios";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IButton {
  title: string;
  className: string;
  onClick?: () => void;
}
export interface IFormInput {
  mobile: string;
}

export interface IInput<TFieldName extends string> {
  title: string;
  type: "tel" | "number";
  className: string;
  register: UseFormRegisterReturn<TFieldName>;
  errors?: string | undefined;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface ILoginResponse {
  data: IUserResponse;
  status: boolean;
}
export interface IUserResponse {
  results: IUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
