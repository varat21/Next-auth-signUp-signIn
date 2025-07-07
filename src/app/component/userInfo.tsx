import React from "react";

const UserInfo = () => {
  return (
    <div className="flex flex-col gap-2 justify-between items-center mt-16  h-[220px] w-[200px]  text-2xl">
      <div className="flex">
        Name:<p className="font-bold ">John</p>
      </div>

      <div className="flex">
        Email:<p className="font-bold ">john@gmail.com</p>
      </div>
      <button className="bg-red-500 text-white px-6 py-2 mt-3">Log Out</button>
    </div>
  );
};

export default UserInfo;
