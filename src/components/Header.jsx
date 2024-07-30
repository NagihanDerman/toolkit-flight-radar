import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector(
    (store) => store.flightReducer
  );

  return (
    <header>
      <div>
        <img src="/plane-logo.png" />
        <h3>Flight Radar</h3>
      </div>

      {isLoading ? (
        <p>Calculating Flights</p>
      ) : error ? (
        <p className="error">Sorry, an error occurred: {error}</p>
      ) : (
        <p>{flights.length} Flight Found</p>
      )}
    </header>
  );
};

export default Header;
