import ShowMessage from "../components/ShowMessage";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import { useFetchData } from "../useFetchData";
function Home() {
  const {
    isError,
    isLoading,
    result,
    filteredCountries,
    setFilteredCountries,
  } = useFetchData();
  return (
    <>
      {isError && <ShowMessage message="Something went wrong" />}
      {isLoading && <ShowMessage message="Loading countries data...!" />}
      {!isError && !isLoading && (
        <>
          <div className=" flex flex-col items-center justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              setFilteredCountries={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              setFilteredCountries={setFilteredCountries}
            />
          </div>
          <CountryList countries={filteredCountries} />
        </>
      )}
    </>
  );
}

export default Home;
