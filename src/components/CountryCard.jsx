import { Link } from "react-router-dom";

function CountryCard(props) {
  const { name, population, region, capital, flag } = props;
  return (
    <Link to={name}>
      <div className="h-full rounded bg-gray-50 p-3 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-[264px]">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src={flag}
          alt={name}
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{name}</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population:</span>
            <span className="font-light">
              {parseInt(population).toLocaleString()}
            </span>
          </p>
          <p>
            <span className="font-semibold">Region:</span>
            <span className="font-light">{region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital:</span>
            <span className="font-light">
              {capital && capital.length > 0 ? capital[0] : "No Capital"}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
