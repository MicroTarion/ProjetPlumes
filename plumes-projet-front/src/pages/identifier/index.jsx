import React from 'react';
import Typography from '../../components/common/Typography';
// import DeleteFiltersButton from '../../components/common/Btn';
import ContainerButton from '../../components/common/ContainerButton';
const IdentifierPage = () => {
  return (
    <>
      <div className="bg-vert-naturaliste flex items-center justify-center vh-10">
        <Typography tag="h2" variant="blanc-plume">
          Identifier ma plume
        </Typography>
      </div>
      {/* <DeleteFiltersButton /> */}
      <ContainerButton />
    </>
  );
};

export default IdentifierPage;