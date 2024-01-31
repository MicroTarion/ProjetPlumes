import FindingLocationCard from './FindingLocationCard';
import FeatherTypeCard from './FeatherTypeCard';
import FeathersPatternCard from './FeathersPatternCard';
import FeathersColorCard from './FeathersColorCard';

const CardFeathersIdentifier = () => {
  return (
    <div className="flex flex-col space-y-4">
      <FindingLocationCard />
      <FeatherTypeCard />
      <FeathersPatternCard />
      <FeathersColorCard />
    </div>
  );
};

export default CardFeathersIdentifier;
