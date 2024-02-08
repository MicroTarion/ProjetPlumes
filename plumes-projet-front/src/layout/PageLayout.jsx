const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-[80vh]">
      {children}
    </div>
  );
};

export default PageLayout;