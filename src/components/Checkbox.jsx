import { forwardRef, useState } from "react";
const Checkbox = forwardRef((props, ref) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="">
      <label htmlFor="checkbox">
        <div
          className={`${
            check ? "bg-[#1f1f1f]" : "bg-black"
          } h-8 w-8 rounded-lg mt-0.7 border-4 border-black`}
        ></div>
      </label>
      <div className="hidden">
        <input
          type="checkbox"
          className=""
          ref={ref}
          {...props}
          name="checkbox"
          id="checkbox"
          onChange={() => setCheck(!check)}
        />
      </div>
    </div>
  );
});

Checkbox.displayName = "Checkbox";
export default Checkbox;
