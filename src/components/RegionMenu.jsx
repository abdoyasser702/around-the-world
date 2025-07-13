import Select from "react-select";

const options = [
  { value: "all regions", label: "All Regions" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];
function RegionMenu(props) {
  const { countriesList, setFilteredCountries } = props;
  const filterCountriesHandler = (event) => {
    const region = event.label;

    const filteredCountriesList =
      region === "All Regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    setFilteredCountries(filteredCountriesList);
  };
  return (
    <Select
      defaultValue={options[0]}
      onChange={filterCountriesHandler}
      options={options}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
}

export default RegionMenu;
