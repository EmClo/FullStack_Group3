import PlacesAutocomplete from "react-places-autocomplete";

function GooglePlaces({ address, onSelect, onChange }) {
  return (
    <PlacesAutocomplete value={address} onChange={onChange} onSelect={onSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            className="inputtextarea"
            style={{
              color: "#510300",

              fontFamily: "Optima sans-serif",
            }}
            {...getInputProps({
              placeholder: "Enter Location ...",
              className: "inputtextarea",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default GooglePlaces;
