import "../../styles/TravelerCard.scss";


interface Props {
  name: string;
  avatar: string;
  description: string;
}

export default function TravelerCard({ name, avatar, description }: Props) {
  return (
    <div className="traveler-card">
      <img src={avatar} alt={name} className="traveler-avatar" />

      <h3 className="traveler-name">{name}</h3>

      <p className="traveler-description">{description}</p>

      <button className="view-profile-btn">
        Переглянути профіль
      </button>
    </div>
  );
}
