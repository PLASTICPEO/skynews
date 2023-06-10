import Header from "../../pages/header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">{children}</div>
    </>
  );
};
