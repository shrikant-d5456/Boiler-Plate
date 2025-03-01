import React, { useEffect, useRef, useState } from "react";

const Select = ({ options, placeholder, inp, setInp }) => {
  const [showoptions, setShowoptions] = useState(false);
  const optionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setShowoptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);
  return (
    <div
      ref={optionRef}
      className={`w-full relative cursor-pointer`}
      onClick={() => setShowoptions(!showoptions)}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 text-sm rounded-full border bg-slate-50 outline-none`}
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        title="click here"
      />
      <div
        className={`w-full max-h-60 absolute transition-all transform shadow-md mt-[1px] rounded-sm overflow-scroll bg-white duration-500 ease-in-out`}
      >
        {showoptions &&
          options.filter((ele) => ele.includes(inp)).map((ele, index) => (
            <Option
              key={index}
              ele={ele}
              setInp={setInp}
              setShowoptions={setShowoptions}
            />
          ))}
      </div>
    </div>
  );
};

const Option = ({ ele, setInp, setShowoptions }) => {
  const operation = (e) => {
    e.stopPropagation();
    setShowoptions(false);
    setInp(ele);
  };

  return (
    <div
      className="w-full border-b-[1px] text-sm text-black bg-white overflow-scroll cursor-pointer transition-transform transform "
      onClick={operation}
    >
      <p className="w-full hover:bg-blue-500 text-left hover:text-white bg-white p-1 overflow-x-scroll px-2">
        {ele}
      </p>
    </div>
  );
};

export default Select;



// ==============================================================================================


/*
const [inp, setInp] = useState("");
const options = ["11110111111", "1110101", "10101010", "101010", "111101", "1110101", "10101010", "101010", "111101", "1101010"];

<div className='flex flex-col w-80 text-white h-screen justify-center items-center m-auto'>
  Current Input : {inp}
  <Select
    options={options}
    placeholder="Search roll Number"
    inp={inp}
    setInp={setInp}
  />
</div>
*/