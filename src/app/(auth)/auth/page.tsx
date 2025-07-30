"use client";
import { GetLoginService } from "@/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { IFormInput } from "@/types";
import { LoginFormSchema } from "@/validation/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    shouldFocusError: true,
  });
  const onSubmit: SubmitHandler<IFormInput> = async () => {
    await GetLoginService();
    router.push("/dashboard");
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Login</h1>
      <div className="form__section">
        <Input
          className={"form__section-input"}
          type={"tel"}
          title="Phone Number"
          register={register("mobile")}
          errors={errors.mobile?.message}
        />
        <Button title="Confirm" className={"form__section-btn"} />
      </div>
    </form>
  );
};

export default Page;
