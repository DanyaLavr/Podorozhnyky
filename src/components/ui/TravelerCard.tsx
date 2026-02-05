import React from 'react';

interface TravelerCardProps {
  name: string;
  avatar: string;
  description: string;
  onViewProfile: () => void;
}

const TravelerCard: React.FC<TravelerCardProps> = ({ 
  name, 
  avatar, 
  description, 
  onViewProfile 
}) => {
  return (
    <div className="traveler-card">
      <img 
        src={avatar} 
        alt={name} 
        className="traveler-avatar"
      />
      <div className="traveler-name">{name}</div>
      <div className="traveler-description">{description}</div>
      <button 
        className="view-profile-btn"
        onClick={onViewProfile}
      >
        Переглянути профіль
      </button>
    </div>
  );
};

export default TravelerCard;