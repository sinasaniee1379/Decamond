import { toast } from "react-hot-toast";
export const successMessage = (message: string) => {
  toast.success(`${message}`, {
    duration: 4000,
    position: "top-center",
  });
};

export const errorMessage = (message: string) => {
  toast.error(message, {
    duration: 4000,
    position: "top-center",
  });
};
