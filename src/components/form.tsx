import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center space-x-5"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} className="p-10" />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register("exampleRequired", { required: true })}
        className="p-10"
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" className="bg-white p-10" />
    </form>
  );
};

export default Form;
