import Service1 from '../assets/Icons/Services-1.png';
import Service2 from '../assets/Icons/Services-2.png';
import Service3 from '../assets/Icons/Services.png';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  return (
    <div className="flex justify-center items-center gap-5 md:gap-6 lg:gap-8 flex-wrap mt-10 py-15">
      <ServiceCard
        icon={Service3}
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <ServiceCard
        icon={Service1}
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
      />
      <ServiceCard
        icon={Service2}
        title="MONEY BACK GUARANTEE"
        description="We return money within 30 days"
      />
    </div>
  );
};

export default Services;
