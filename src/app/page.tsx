"use client";

import { useEffect, useState } from "react";
import caracterOptions from "./data/CaracterOptions";
import OptionCheckbox from "./components/OptionCheckbox";
import Password from "./model/Password";
import ShowPassword from "./components/ShowPassword";
import PasswordStrenght from "./components/PasswordStrenght";

export default function Home() {
  const [passwordSize, setPasswordSize] = useState<number>(8);
  const [caracterTypes, setCaracterTypes] = useState(caracterOptions);
  const [password, setPassword] = useState("");
  const [passwordStrenght, setPasswordStrenght] = useState(1);

  useEffect(() => {
    setPasswordStrenght(Password.calculatePasswordStrenght(password));
  }, [password]);

  const handleOptionsChange = (index: number) => {
    const aux = [...caracterTypes];
    aux[index].value = !aux[index].value;
    setCaracterTypes([...aux]);
  };

  const generatePassword = () => {
    const newPassword = Password.generatePassword(passwordSize, caracterTypes);
    setPassword(newPassword);
  };

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">
        Password Generator
      </h1>
      <div className="w-1/4 bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex flex-col gap-3 text-2xl">
          <label className="flex justify-between">
            <span>Password size:</span>
            <span className="text-blue-500">{passwordSize}</span>
          </label>
          <input
            type="range"
            min={5}
            max={30}
            value={passwordSize}
            onChange={(e) => setPasswordSize(+e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          {caracterTypes.map((caracterOption, i) => {
            return (
              <OptionCheckbox
                text={caracterOption.name}
                id={caracterOption.id}
                key={caracterOption.id}
                selected={caracterOption.value}
                handleOptionsChange={() => handleOptionsChange(i)}
              />
            );
          })}
        </div>
        <PasswordStrenght strenght={passwordStrenght} />
        <button
          className="text-white bg-blue-500 text-lg rounded font-bold w-full p-2 mt-3"
          onClick={generatePassword}
        >
          Generate Password
        </button>
        <ShowPassword
          password={password}
          onPasswordClear={() => setPassword("")}
        />
      </div>
    </main>
  );
}
