import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../types/Inputs";
import Input from "./input";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  // console.log(watch("revenue")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center space-x-5   w-full  "
    >
      <Input labelName="Gelir" label="revenue" register={register} required />
      {errors.revenue && <span>Bu alanı boş bırakamazsınız</span>}
      <Input labelName="Gider" label="expenses" register={register} />
      <Input labelName="İndirimler" label="allowance" register={register} />

      {/* errors will return when field validation fails  */}

      <input
        type="submit"
        className="bg-white p-2 shadow-lg h-full rounded-md text-xl hover:bg-blue-400 hover:text-white transition-colors cursor-pointer"
      />
    </form>
  );
};

export default Form;
