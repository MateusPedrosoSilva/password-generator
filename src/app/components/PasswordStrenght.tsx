/* eslint-disable react/display-name */

import Bar from "./Bar";

/* eslint-disable import/no-anonymous-default-export */
interface PasswordStronghtProps {
  strenght: number;
}

export default function (props: PasswordStronghtProps) {
  return (
    <div className="flex text-xl items-center">
      <span className="font-bold">Password Strenght: </span>
      <Bar
        bgColor={
          props.strenght === 3
            ? "bg-green-500"
            : props.strenght === 2
            ? "bg-yellow-500"
            : "bg-red-500"
        }
      />
      <Bar
        bgColor={
          props.strenght === 3
            ? "bg-green-500"
            : props.strenght === 2
            ? "bg-yellow-500"
            : ""
        }
      />
      <Bar bgColor={props.strenght === 3 ? "bg-green-500" : ""} />
    </div>
  );
}
