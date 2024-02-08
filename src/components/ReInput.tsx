/* eslint-disable react/display-name */
"use client";
import {
  Fragment,
  HTMLInputTypeAttribute,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

type Props = {
  placeholder: string;
  defaultValue?: any;
  type?: HTMLInputTypeAttribute;
  onFinish?: (value: any) => void;
};

export type InputHandle = {
  setDefaultValue: (params: any) => void;
  getValue: () => any;
};

const ReInput = forwardRef<InputHandle, Props>((props, ref) => {
  const [value, setValue] = useState<any>(props?.defaultValue || null);

  useImperativeHandle(ref, (): any => ({
    getValue() {
      return value;
    },
    setDefaultValue(params: any) {
      setValue(params);
    },
  }));

  useEffect(() => {
    if (props.onFinish) {
      if (value !== undefined) props.onFinish(value);
    }
  }, [value]);

  return (
    <Fragment>
      <input
        required
        type={props?.type || "text"}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-full border border-solid border-[#919EAB52] px-2 pb-2 pt-4 rounded-lg placeholder:underline placeholder:text-[#919EAB]"
        placeholder={props.placeholder}
      />
    </Fragment>
  );
});

export default ReInput;
