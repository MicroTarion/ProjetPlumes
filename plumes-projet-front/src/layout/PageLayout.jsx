const PageLayout = ({ children }) => {
  return (
    <div
      style={{
        miHeight:
          "calc(100vh - 50px)" /* 100vh est la hauteur totale du viewport, 60px est la hauteur de votre footer */,
        marginBottom: "50px" /* Espace pour le footer */,
      }}
    >
      {children}
    </div>
  );
};

export default PageLayout;
