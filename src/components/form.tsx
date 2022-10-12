import { useForm, SubmitHandler } from "react-hook-form";
import { InputTypes } from "../types/Inputs";
import { calculator } from "../utils/calculator";
import useStore from "../store/useStore";
import Input from "./input";
import Select from "./select";
import Modal from "./modal";
import { HOUSE_EXCEPTION } from "../constants";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<InputTypes>();

  const { setResults, modal, setModal } = useStore();
  const { revenue, expensesKind, loanKind } = watch();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    if (revenue <= 9500) {
      return setModal(true);
    }
    if (data.expensesKind === "sumExpenses") {
      data.expenses = (data.revenue - HOUSE_EXCEPTION) * 0.15;
    }

    const result = calculator(data);
    setResults(result);
    reset();
  };

  //watch for expensesKind change

  return (
    <div className="flex flex-col w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  justify-center items-center space-y-5     w-full  "
      >
        <Select
          label="loanKind"
          labelName="Kira Türü"
          {...register("loanKind")}
          options={[
            { value: "homeLoan", optionName: "Mesken Kirası" },
            { value: "businessLoan", optionName: "İşyeri Kirası" },
            {
              value: "homeAndBusinessLoan",
              optionName: "Mesken ve İşyeri Kirası",
            },
          ]}
        />
        <div className="flex  flex-col md:flex-row  justify-center items-center md:space-x-2 w-full">
          <Input
            labelName="Gelir"
            label="revenue"
            register={register}
            defaultValue={0}
            required
          />
          {errors.revenue && <span>Bu alanı boş bırakamazsınız</span>}

          <Input
            labelName="İndirimler"
            label="allowance"
            register={register}
            defaultValue={0}
          />
          <Select
            label="expensesKind"
            labelName="Gider Türü"
            {...register("expensesKind")}
            options={[
              { value: "exactCharges", optionName: "Gerçek" },
              { value: "sumExpenses", optionName: "Götürü" },
            ]}
          />
          <Input
            disabled={expensesKind === "sumExpenses"}
            labelName="Gider"
            label="expenses"
            register={register}
            defaultValue={
              expensesKind === "sumExpenses"
                ? (revenue - HOUSE_EXCEPTION) * 0.15
                : 0
            }
          />
        </div>
        {loanKind !== "homeLoan" && (
          <div className="w-full">
            <Input
              labelName="Kesintiler(Stopaj)"
              label="deductions"
              register={register}
              defaultValue={0}
            />
          </div>
        )}
        <input
          type="submit"
          className="bg-white p-2 shadow-lg h-full w-full rounded-md text-xl hover:bg-blue-400 hover:text-white transition-colors cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:bg-gray-100 disabled:hover:text-black"
        />
      </form>
      {
        //if revenue is less than 9500, show this message
        modal && (
          <Modal title="Bilgilendirme">
            {" "}
            2022 yılı için mesken kira istisnası 9500 TL'dir. Bu sebeple bir yıl
            içindeki toplam kira geliri 9500 TL'nin altında kalan mükelleflerin
            beyanname vermesine gerek olmadığından hesaplama yapılmamaktadır.{" "}
          </Modal>
        )
      }
    </div>
  );
};

export default Form;
