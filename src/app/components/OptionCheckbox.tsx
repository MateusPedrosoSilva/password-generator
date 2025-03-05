/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
interface CheckBoxProps {
  id: string;
  text: string;
  selected: boolean;
  handleOptionsChange: () => void;
}

export default function (props: CheckBoxProps) {
  const id = `checkbox-${props.id}`;
  return (
    <div className="flex text-xl gap-2">
      <input
        type="checkbox"
        checked={props.selected}
        onChange={props.handleOptionsChange}
        id={id}
      />
      <label htmlFor={id}>{props.text}</label>
    </div>
  );
}
