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
  width: "80%",
  margin: "auto",
  marginTop: "1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "0.5rem",
};

const bodyContainerCardImg = {
  //   position: "absolute",
  //   top: "52%",
  //   left: "55%",
  width: "25rem",
  height: "auto",
};

const bodyContainerCardH2 = {
  width: "100%",
  textAlign: "center",
  color: "#FBFBFF",
  marginBottom: "0.5rem",
  textTransform: "capitalize",
};

const bodyContainerCardGhost = {
  position: "absolute",
  width: "20rem",
  height: "20rem",
  top: "58%",
  left: "14%",
  zIndex: "-1",
  backgroundColor: "#01aAEF",
  transform: "rotate(45deg)",
  boxShadow:
    "0 19px 38px rgba(1, 172, 239,0.30), 0 15px 12px rgba(1, 172, 239,0.22)",
};

class PokemonsShow extends React.Component {
  render() {
    const data = this.props.pokemon;

    return (
      <div>
        {/* Header - Starts Here - */}
        <div style={headerContainer}>
          <div>Show Page</div>
          <div style={headerNavigation}>
            <div style={headerNavigationItems}>
              <p style={headerNavigationItemsP}>
                <a
                  style={headerNavigationItemsP}
                  href="http://localhost:3000/pokemon/"
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
        </div>

        {/* Header - Ends Here -*/}

        <div style={bodyContainer}>
          <div style={bodyContainerCard}>
            <div style={bodyContainerCardGhost}></div>
            <div>
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
