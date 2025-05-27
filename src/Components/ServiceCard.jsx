const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center ">
      <img src={icon} alt={title} className="mb-2" />
      <h2 className="font-semibold text-lg mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
export default ServiceCard;