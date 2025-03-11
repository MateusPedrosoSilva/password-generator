/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import { BAR_COLORS } from "../constants/barConfig";
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
            ? BAR_COLORS.green
            : props.strenght >= 40 || props.strenght <= 59
            ? BAR_COLORS.yellow
            : BAR_COLORS.red
        }
      />
      <Bar
        bgColor={
          props.strenght >= 60
            ? BAR_COLORS.green
            : props.strenght >= 40 || props.strenght <= 59
            ? BAR_COLORS.yellow
            : ""
        }
      />
      <Bar bgColor={props.strenght >= 60 ? BAR_COLORS.green : ""} />
    </div>
  );
}
