const React = require("react");

const headerContainer = {
  fontFamily: "Arial",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100vw",
  minHeight: "50vh",
  padding: "1rem",
  margin: "-1rem",
  backgroundColor: "#01BAEF",
  fontSize: "3rem",
  color: "#0B4F6C",
  letterSpacing: "0.5rem",
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
  color: "#FBFBFF",
};

const bodyContainer = {
  fontFamily: "Arial",
  padding: "1.5rem",
  width: "90vw",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const bodyContainerCard = {
  width: "26%",
  maxHeight: "700px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.5rem",
  boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
};

const bodyContainerCardImg = {
  width: "10rem",
  height: "10rem",
};
const bodyContainerCardH3 = {
  width: "100%",
  textAlign: "center",
  backgroundColor: "#01BAEF",
  color: "#FBFBFF",
  marginBottom: "0.5rem",
  textTransform: "capitalize",
  letterSpacing: "0.2rem",
  fontSize: "1.2rem",
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

        <div style={bodyContainer}>
          <div style={bodyContainer}>
            {this.props.pokemon.map((data) => (
              <div style={bodyContainerCard}>
                <div style={bodyContainerCardH3}>
                  <h3>{data.name}</h3>
                </div>
                <img
                  style={bodyContainerCardImg}
                  src={data.img}
                  alt={data.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ListOfPokemons;
