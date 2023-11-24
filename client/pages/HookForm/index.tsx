import { SubmitHandler, useForm } from "react-hook-form";

interface IForm {
  firstName: string;
  gender: "male" | "female" | "other";
}

export const HookForm = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log("dados", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="First Name" {...register("firstName")} />
        <select placeholder="Gender" {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
