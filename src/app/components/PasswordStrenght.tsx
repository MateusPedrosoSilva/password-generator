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
          props.strenght >= 120.0
            ? BAR_COLORS.blue
            : props.strenght >= 60.0 && props.strenght <= 119.0
            ? BAR_COLORS.green
            : props.strenght >= 36.0 && props.strenght <= 59.0
            ? BAR_COLORS.yellow
            : BAR_COLORS.red
        }
      />
      <Bar
        bgColor={
          props.strenght >= 120.0
            ? BAR_COLORS.blue
            : props.strenght >= 60.0 && props.strenght <= 119.0
            ? BAR_COLORS.green
            : props.strenght >= 36.0 && props.strenght <= 59.0
            ? BAR_COLORS.yellow
            : ""
        }
      />
      <Bar
        bgColor={
          props.strenght >= 120.0
            ? BAR_COLORS.blue
            : props.strenght >= 60.0 && props.strenght <= 119.0
            ? BAR_COLORS.green
            : ""
        }
      />
      <Bar bgColor={props.strenght >= 120 ? BAR_COLORS.blue : ""} />
    </div>
  );
}
