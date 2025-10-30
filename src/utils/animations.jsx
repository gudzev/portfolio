import { motion } from "motion/react";


export function LoadAnimation({children, dur})
{
    return (
        <motion.div className="motion-div"
        initial={{ opacity: 0, scale: 0.8 }} // Starting point
        whileInView={{ opacity: 1, scale: 1 }} // End point
        transition={{ duration: dur, ease: "backOut" }}
        viewport={{ once: true, amount: .05 }} // When it enters viewport
        >
            {children}
        </motion.div>
    )
};