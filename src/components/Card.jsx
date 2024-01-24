import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragSnapToOrigin whileHover={{ scale: 1.2 }} dragConstraints= {reference} whileDrag={{scale: 1.2}} className="card relative text-white w-56 h-72 rounded-[35px] bg-zinc-900/90 px-6 py-9 overflow-hidden shadow-lg">
      <FaRegFileAlt />
      <p className="leading-tight mt-8 font-semibold">{data.description}</p>
      <div className="footer w-full absolute left-0 bottom-0">
        <div className="footerDesc w-full px-6 mb-4 flex justify-between items-center">
          <h3>{data.fileSize}</h3>
          {data.tag.download ? <MdDownloadForOffline /> : <IoCloseCircle/>}
        </div>
        {data.tag.download ? 
        <div className="tag bg-green-500 cursor-pointer py-5 w-full">
        <h2 className="text-center text-sm font-semibold tracking-tight leading-none">
          Download Now
        </h2>
      </div>
      : <div className="tag bg-blue-500 cursor-pointer py-5 flex justify-center items-center w-full">
      <div className="w-3/4 rounded-3xl py-1 bg-white relative overflow-hidden">
        <div className="w-36 bg-blue-200 py-1 absolute top-0 left-0 rounded-3xl"></div>
      </div>
    </div>}
      </div>
    </motion.div>
  );
};

export default Card;
