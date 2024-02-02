import Typography from '../../components/common/Typography';

import ContainerButton from '../../components/common/ContainerButton';
const IdentifierPage = () => {
  return (
    <>
      <div className="bg-vert-naturaliste flex items-center justify-center vh-10">
        <Typography tag="h2" variant="blanc-plume">
          Identifier ma plume
        </Typography>
      </div>
      
      <ContainerButton onClickDelete={() => console.log("detele")} onClickSeeResults={() => console.log("see result")} />
    </>
  );
};

export default IdentifierPage;