/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
interface BarProps {
  bgColor: string;
}

export default function (props: BarProps) {
  return (
    <span
      className={`ml-2 p-1.5 w-3 h-8 rounded-sm border-gray-100 border-2 ${props.bgColor}`}
    ></span>
  );
}
