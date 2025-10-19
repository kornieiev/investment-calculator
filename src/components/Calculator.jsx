import { useEffect, useState } from "react";
import Table from "./Table";
import { calculateInvestmentResults } from "../utils/investment";

const initialInputNames = {
  "Initial investment": 10000,
  "Annual investment": 1200,
  "Expected return": 6,
  Duration: 10,
};

export default function Calculator() {
  const [inputFields, setInputFields] = useState(initialInputNames);
  const [result, setResult] = useState([]);
  const [errors, setErrors] = useState({});

  function onHandleChange(e, key) {
    if (e <= 0 || e % 1 !== 0) {
      setErrors((prev) => ({
        ...prev,
        [key]: "Need to be more than 0 and integer",
      }));
      return;
    }
    setInputFields((prev) => ({ ...prev, [key]: +e }));
    setErrors({});
  }

  useEffect(() => {
    const {
      "Initial investment": initialInvestment,
      "Annual investment": annualInvestment,
      "Expected return": expectedReturn,
      Duration: duration,
    } = inputFields;

    const result = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });

    if (result.length > 0) {
      setResult(result);
    }
  }, [inputFields]);

  return (
    <>
      <div className='py-6 mx-auto'>
        <section className='max-w-sm mx-auto'>
          <ul className='grid grid-cols-2 gap-4 p-6 from-blue-400 to-cyan-400 bg-gradient-to-tr rounded-xl dark:bg-gradient-to-b dark:from-cyan-900 dark:to-blue-900'>
            {Object.entries(inputFields).map(([key, value]) => (
              <li key={key} className='flex flex-col gap-1'>
                <label className='text-xs font-bold text-black/80 dark:text-white/90'>
                  {key}
                </label>
                <input
                  className='px-2 py-1 border rounded-lg bg-white/80'
                  key={key}
                  value={value}
                  type='number'
                  required
                  onChange={(e) => onHandleChange(e.target.value, key)}
                ></input>
                {errors[key] && (
                  <p className='text-[9px] text-red-500'>{errors[key]}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
      {result.length > 0 && inputFields["Annual investment"] != 0 && (
        <Table result={result} />
      )}
    </>
  );
}
