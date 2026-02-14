import { useState } from "react";
import ArrowDown from "../../../public/icons/ArrowDown.svg";
interface IProps {
  placeholder: string;
  options: { value: string; label: string }[];
  onChoose?: (value: string) => void;
  className?: string;
}
const SelectItem = ({ placeholder, options, onChoose, className }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [choose, setChoose] = useState<string>(placeholder);
  const border =
    isOpen || choose !== placeholder
      ? "border-blue-700"
      : "border-gray-900/15 ";
  const color = choose !== placeholder ? "text-gray-500" : "text-gray-900";
  const rounded = isOpen ? "rounded-t-lg" : "rounded-lg";
  return (
    <div className={`relative ${className || ""}`}>
      <div
        className={`flex gap-4 p-2 border ${border} ${rounded} font-main text-lg ${color} hover:border-blue-700 focus:border-blue-700`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="flex-1">{choose}</p>
        <button
          className={`cursor-pointer transition ${isOpen ? "rotate-180" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
        >
          <ArrowDown />
        </button>
      </div>
      {isOpen && (
        <ul className="grid gap-2 px-2 py-3 border border-t-0 border-blue-700 rounded-b-lg">
          {options.map((elem, idx) => (
            <li
              className="py-1 px-2 font-main rounded-sm text-lg hover:bg-gray-100"
              key={idx}
              data-value={elem.value}
              onClick={() => {
                setChoose(elem.label);
                setIsOpen(false);
                onChoose?.(elem.value);
              }}
            >
              {elem.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectItem;
