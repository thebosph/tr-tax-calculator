import { useForm, SubmitHandler } from "react-hook-form";
import { InputTypes } from "../types/Inputs";
import { calculator } from "../utils/calculator";
import useStore from "../store/useStore";
import Input from "./input";
import Select from "./select";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<InputTypes>();

  const { setResults } = useStore();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    const result = calculator(data);
    setResults(result);
    reset();
    console.log(data);
  };

  //watch for expensesKind change

  const { expenses, revenue, expensesKind, allowance } = watch();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5   w-full  "
    >
      <Input labelName="Gelir" label="revenue" register={register} required />
      {errors.revenue && <span>Bu alanı boş bırakamazsınız</span>}

      <Input labelName="İndirimler" label="allowance" register={register} />
      <Select
        label="expensesKind"
        labelName="Gider Türü"
        {...register("expensesKind")}
      />
      <Input
        disabled={expensesKind === "sumExpenses"}
        labelName="Gider"
        label="expenses"
        register={register}
        defaultValue={
          expensesKind === "sumExpenses" ? revenue * 0.15 : expenses
        }
      />

      <input
        type="submit"
        className="bg-white p-2 shadow-lg h-full rounded-md text-xl hover:bg-blue-400 hover:text-white transition-colors cursor-pointer"
      />
    </form>
  );
};

export default Form;
