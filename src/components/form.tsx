import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../types/Inputs";
import { calculator } from "../utils/calculator";
import useStore from "../store/useStore";
import Input from "./input";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { setResults } = useStore();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const result = calculator(data);
    setResults(result);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center space-x-5   w-full  "
    >
      <Input labelName="Gelir" label="revenue" register={register} required />
      {errors.revenue && <span>Bu alanı boş bırakamazsınız</span>}
      <Input labelName="Gider" label="expenses" register={register} />
      <Input labelName="İndirimler" label="allowance" register={register} />

      <input
        type="submit"
        className="bg-white p-2 shadow-lg h-full rounded-md text-xl hover:bg-blue-400 hover:text-white transition-colors cursor-pointer"
      />
    </form>
  );
};

export default Form;
