import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <div id="sunmoon">{props.children}</div>
    </>
  );
}
