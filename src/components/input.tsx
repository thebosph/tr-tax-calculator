import { Path, UseFormRegister } from "react-hook-form";
import { InputTypes } from "../types/Inputs";

interface InputProps {
  labelName: string;
  label: Path<InputTypes>;
  register: UseFormRegister<InputTypes>;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: number;
}

const Input = ({
  labelName,
  label,
  register,
  required,
  disabled,
  defaultValue,
}: InputProps) => {
  console.log(disabled);
  return (
    <div className="flex flex-col shadow-lg space-y-2 p-2 w-full rounded-md ">
      <label className="text-2xl">{labelName}</label>
      <input
        defaultValue={defaultValue}
        {...register(label, { required })}
        className="py-2 px-1 border-blue-100 border-2 rounded-md disabled:bg-slate-200 disabled:cursor-not-allowed"
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
