import NotFoundSvg from "../../public/svg/NotFoundSvg";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-8">
      <h2>Página Não Encontrada :(</h2>
      <NotFoundSvg />
    </div>
  );
};

export default NotFound;
