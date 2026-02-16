import React from 'react';
import emptyframe from "@/assets/frameEmpty.png";
import Button from '../ui/button';
import { Plus } from 'lucide-react';

const EmptyState: React.FC = ({entityType, onAddClick}: {entityType: string, onAddClick: () => void}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Illustration Container */}
            <img src={emptyframe} alt="Empty State Illustration" className="w-64 h-64" />
      

      {/* Message */}
      <p className="text-lg text-gray-600 mb-10">
        There are no {entityType} yet
      </p>

      {/* Add Student Button */}
      
      <Button text={`Add new ${entityType}`} className='px-40 py-4' leftIcon={Plus} onClick={onAddClick} />
    </div>
  );
};

export default EmptyState;