import FindingLocationCards from './FindingLocationCards';
import FeatherTypeCards from './FeatherTypeCards';
import FeathersPatternCard from './FeathersPatternCard';
import FeathersColorsCard from './FeathersColorsCard';

const CardFeathersIdentifier = () => {
  return (
    <div className="flex flex-col space-y-4">
      <FindingLocationCards />
      <FeatherTypeCards />
      <FeathersPatternCard />
      <FeathersColorsCard />
    </div>
  );
};

export default CardFeathersIdentifier;
