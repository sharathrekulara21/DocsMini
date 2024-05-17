import React from "react";
import { FaRegFile } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
function Card({ data, reference }) {
	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.1 }}
			dragElastic={0.2}
			dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
			className='relative flex-shrink-0 w-60 h-72 rounded-[40px] text-white bg-zinc-900/90 px-8 py-10 overflow-hidden'
		>
			<FaRegFile />
			<p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
			<div className='footer absolute bottom-0  w-full left-0'>
				<div className='flex items-center px-8 py-3 mb-3 justify-between'>
					<h5>.{data.filesize}</h5>
					<span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
						{data.close ? <IoClose /> : <LuDownload size='.8em' color='#000' />}
					</span>
				</div>
				{data.tag.isOpen && (
					<div
						className={`tag w-full py-4 ${
							data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
						} flex items-center justify-center`}
					>
						<h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
					</div>
				)}
			</div>
		</motion.div>
	);
}

export default Card;
