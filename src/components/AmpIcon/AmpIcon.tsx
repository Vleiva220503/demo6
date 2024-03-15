import React from 'react';

interface AmpIconProps {
  icon: string;
  onClick?: () => void;
}

const AmpIcon: React.FC<AmpIconProps> = ({ icon, onClick }) => {
  return (
    <div onClick={onClick}>
      <span className={`icon-${icon}`} />
    </div>
  );
};

export default AmpIcon;
