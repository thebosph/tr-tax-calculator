import React from "react";
import { UseFormRegister } from "react-hook-form";
import { InputTypes } from "../types/Inputs";

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string; labelName?: string } & ReturnType<
    UseFormRegister<InputTypes>
  >
>(({ onChange, onBlur, name, label, labelName }, ref) => (
  <div className="flex flex-col shadow-lg space-y-2 p-2 w-full rounded-md  ">
    <label className="text-2xl">{labelName}</label>
    <select
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className="py-3 px-1 bg-slate-100 "
    >
      <option value="exactCharges">Gerçek</option>
      <option value="sumExpenses">Götürü</option>
    </select>
  </div>
));

export default Select;
