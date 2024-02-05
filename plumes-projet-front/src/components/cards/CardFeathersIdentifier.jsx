import FindingLocationCards from './FindingLocationCards';
import FeatherTypeCards from './FeatherTypeCards';
import FeathersColorsCard from './FeathersColorsCard';

const CardFeathersIdentifier = () => {
  return (
    <div className="flex flex-col space-y-4">
      <FindingLocationCards />
      <FeatherTypeCards />
      <FeathersColorsCard />
    </div>
  );
};

export default CardFeathersIdentifier;
