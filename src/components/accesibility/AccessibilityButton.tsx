import { FaUniversalAccess } from 'react-icons/fa';
import AccessibilityMenu from './AccessibilityMenu';

interface AccessibilityButtonProps {
  onClick: () => void;
}

export default function AccessibilityButton({ onClick }: AccessibilityButtonProps) {
  return (
    <>
      <button
        onClick={onClick} // Here you are passing the onClick handler
        className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open accessibility menu"
      >
        <FaUniversalAccess className="w-6 h-6" />
      </button>
    </>
  );
}
