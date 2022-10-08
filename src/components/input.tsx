import { Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../types/Inputs";

interface InputProps {
  labelName: string;
  label: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  required?: boolean;
}

const Input = ({ labelName, label, register, required }: InputProps) => {
  return (
    <div className="flex flex-col shadow-lg space-y-2 p-2 w-full rounded-md ">
      <label className="text-2xl">{labelName}</label>
      <input
        defaultValue={0}
        {...register(label, { required })}
        className="py-2 px-1 border-blue-100 border-2 rounded-md"
      />
    </div>
  );
};

export default Input;
