/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import Bar from "./Bar";

interface PasswordStronghtProps {
  strenght: number;
}

export default function (props: PasswordStronghtProps) {
  return (
    <div className="flex text-xl items-center">
      <span className="font-bold">Password Strenght: </span>
      <Bar
        bgColor={
          props.strenght >= 60
            ? "bg-green-500"
            : (props.strenght >=40 || props.strenght <= 59)
            ? "bg-yellow-500"
            : "bg-red-500"
        }
      />
      <Bar
        bgColor={
          props.strenght >= 60
            ? "bg-green-500"
            : (props.strenght >=40 || props.strenght <= 59)
            ? "bg-yellow-500"
            : ""
        }
      />
      <Bar bgColor={props.strenght >= 60 ? "bg-green-500" : ""} />
    </div>
  );
}
