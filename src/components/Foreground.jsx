import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref =useRef(null);
  const data = [
    {
      desc: "This is Praveen Kumar Chauhan",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: " Praveen Kumar Chauhan",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Naveen Chauhan",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
    },
    {
      desc: "Sriniwas Chauhan",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "The King Kohli",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
