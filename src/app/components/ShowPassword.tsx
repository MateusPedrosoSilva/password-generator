/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import { CARACTER_COLORS } from "../constants/caractersConfig";

interface ShowPasswordProps {
  password: string;
  onPasswordClear: () => void;
}

export default function (props: ShowPasswordProps) {
  const [copyPopup, setCopyPopup] = useState(false);

  const copyPassword = () => {
    if (!props.password) return;
    navigator.clipboard.writeText(props.password);
    setCopyPopup(true);
    setTimeout(() => setCopyPopup(false), 1500);
    setTimeout(() => {
      props.onPasswordClear();
    }, 5000);
  };

  return (
    <div className="mt-3">
      {props.password.trim() !== "" && (
        <>
          <span className="font-bold text-lg">Generated password: </span>
          <div className="flex justify-between p-2 border rounded bg-gray-100 text-slate-800">
            <div className=" flex text-2xl">
              {props.password.split("").map((char) => {
                if (/[a-z]/.test(char))
                  return (
                    <span className={`${CARACTER_COLORS.lowercase}`}>
                      {char}
                    </span>
                  );
                if (/[A-Z]/.test(char))
                  return (
                    <span className={`${CARACTER_COLORS.uppercase}`}>
                      {char}
                    </span>
                  );
                if (/[0-9]/.test(char))
                  return (
                    <span className={`${CARACTER_COLORS.numbers}`}>{char}</span>
                  );
                if (/[\W_]/.test(char))
                  return (
                    <span className={`${CARACTER_COLORS.symbols}`}>{char}</span>
                  );
                return char;
              })}
            </div>
            <IconCopy
              className="hover:text-blue-500 cursor-pointer"
              onClick={copyPassword}
            />
          </div>
        </>
      )}

      {copyPopup && (
        <p className="mt-2 text-blue-500 text-center">
          password copied to clipboard
        </p>
      )}
    </div>
  );
}
