import { Link } from "react-router-3";

function Home(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          padding: "20px",
          textAlign: "center",
          border: "2px solid black",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/main">Main</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/about">About</Link>
        <Link to="/article/127">Article 127</Link>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ flex: 1, border: "2px solid black", justifySelf: "stretch" }}
        >
          Sidebar
        </div>
        <div style={{ flex: 8 }}>{props.children}</div>
      </div>
    </div>
  );
}

export default Home;
