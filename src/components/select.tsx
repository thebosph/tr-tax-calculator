import React from "react";
import { UseFormRegister } from "react-hook-form";
import { InputTypes } from "../types/Inputs";

type optionItem = {
  value: string;
  optionName: string;
};

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string; labelName?: string; options: optionItem[] } & ReturnType<
    UseFormRegister<InputTypes>
  >
>(({ onChange, onBlur, name, labelName, options }, ref) => (
  <div className="flex flex-col shadow-lg space-y-2 p-2 w-full rounded-md  ">
    <label className="text-2xl">{labelName}</label>
    <select
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className="py-3 px-1 bg-slate-100 "
    >
      {options.map((option: optionItem) => (
        <option value={option.value}>{option.optionName}</option>
      ))}
    </select>
  </div>
));

export default Select;
