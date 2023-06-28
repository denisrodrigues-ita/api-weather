import NotFound from "../../../public/svg/CityNotFound";

const CityNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-16">
      <h2>Cidade não encontrada :(</h2>
      <NotFound />
    </div>
  );
};

export default CityNotFound;
