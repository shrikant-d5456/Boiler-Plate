import React from 'react';

const Table = ({ heading, data, headingBgColor }) => {
  return (
    <div className='w-full h-full p-4 overflow-scroll '>
      <table className='min-w-full  border '>
        <thead style={{ backgroundColor: headingBgColor }}>
          <tr>
            {heading.map((ele, ind) => (
              <th key={ind} className='py-2 px-4 border text-white' style={{ borderColor: headingBgColor }}>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((ele, ind) => (
            <tr key={ind} className='border' style={{ borderColor: headingBgColor }}>
              <td className='py-2 px-4 border' style={{ borderColor: headingBgColor }}>{ele.d1}</td>
              <td className='py-2 px-4 border' style={{ borderColor: headingBgColor }}>{ele.d2}</td>
              <td className='py-2 px-4 border' style={{ borderColor: headingBgColor }}>{ele.d3}</td>
              <td className='py-2 px-4 border' style={{ borderColor: headingBgColor }}>{ele.d4}</td>
              <td className='py-2 px-4 border' style={{ borderColor: headingBgColor }}>{ele.d5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
