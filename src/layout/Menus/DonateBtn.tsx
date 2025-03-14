import Link from 'next/link';
import { motion } from 'framer-motion'

interface DonateBtnProps {
  onLinkClick?: () => void;
}

export default function DonateBtn({ onLinkClick }: DonateBtnProps) {
  return (

    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
    <Link
      href="/stwdonate/support-stw"
      className="inline-flex items-center px-8 py-3 text-white bg-primary rounded-full shadow-md
      hover:bg-primary-dark dark:hover:bg-blue-600
      transition-all duration-300 whitespace-nowrap"
      onClick={onLinkClick}
    >
      Donate
    </Link>
    </ motion.div>
  );
}