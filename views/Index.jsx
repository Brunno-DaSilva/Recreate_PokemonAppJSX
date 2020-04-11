const React = require("react");

const headerContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100vw",
  minHeight: "50vh",
  padding: "1rem",
  backgroundColor: "#01BAEF",
  fontSize: "3rem",
  color: "#0B4F6C",
  letterSpacing: "0.5rem",
  fontFamily: "Arial",
};

const headerNavigation = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "0",
  paddingLef: "1rem",
  paddingRight: "0.5rem",
};
const headerNavigationItems = {
  padding: "0 5rem",
  letterSpacing: "0.5rem",
  border: "0",
};

const headerNavigationItemsP = {
  fontSize: "2rem",
};

class ListOfPokemons extends React.Component {
  render() {
    return (
      <div>
        {/* Header - Starts Here - */}
        <div style={headerContainer}>
          <div>
            <h1>List of Pokemons</h1>
          </div>
          <div style={headerNavigation}>
            <div style={headerNavigationItems}>
              <p style={headerNavigationItemsP}>Home</p>
              <span></span>
            </div>
            <div style={headerNavigationItems}>
              <p style={headerNavigationItemsP}>Edit</p>
              <span></span>
            </div>
            <div style={headerNavigationItems}>
              <p style={headerNavigationItemsP}>More </p>
            </div>
          </div>
        </div>

        {/* Header - Ends Here -*/}
      </div>
    );
  }
}

module.exports = ListOfPokemons;
