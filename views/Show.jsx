const React = require("react");

const headerContainer = {
  fontFamily: "Arial",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100vw",
  minHeight: "45vh",
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
  textDecoration: "none",
};

const bodyContainer = {
  fontFamily: "Arial",
  width: "90vw",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "0.5rem",
};

const bodyContainerCard = {
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  flexDirection: "column",
};

const bodyContainerCardImg = {
  width: "25rem",
  height: "auto",
};
const bodyContainerTitle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const bodyContainerCardH2 = {
  width: "100%",
  color: "#02022e",
  textTransform: "capitalize",
  fontSize: "2.5rem",
  fontWeight: "bold",
};

class PokemonsShow extends React.Component {
  render() {
    const data = this.props.pokemon;

    return (
      <div>
        {/* Header - Starts Here - */}
        <div style={headerContainer}>
          <div style={headerNavigation}>
            <div style={headerNavigationItems}>
              <p style={headerNavigationItemsP}>
                <a
                  style={headerNavigationItemsP}
                  href="http://localhost:3000/pokemon"
                >
                  Home
                </a>
              </p>
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
          <div>{data.name}</div>
        </div>

        {/* Header - Ends Here -*/}

        <div style={bodyContainer}>
          <div style={bodyContainerCard}>
            <div style={bodyContainerTitle}>
              <h2 style={bodyContainerCardH2}>Hi I am {data.name}</h2>
            </div>
            <img style={bodyContainerCardImg} src={data.img} alt={data.nme} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PokemonsShow;
