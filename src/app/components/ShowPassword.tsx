/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";

interface ShowPasswordProps {
  password: string;
}

export default function (props: ShowPasswordProps) {
  const [copyPopup, setCopyPopup] = useState(false);

  const copyPassword = () => {
    navigator.clipboard.writeText(props.password);
    setCopyPopup(true);
    setTimeout(() => setCopyPopup(false), 1500);
  };

  return (
    <div className="mt-3">
      {props.password.trim() !== "" && (
        <>
          <span className="font-bold text-lg">Generated password: </span>
          <div className="flex justify-between p-2 border rounded bg-gray-100 text-slate-800">
            {props.password}
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
