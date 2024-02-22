import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  const fetch = useIsFetching();
  return (
    <>
      <div id="main-header-loading">{fetch > 0 && <progress />}</div>
      <header id="main-header">
        <div id="header-title">
          <h1>Sakr Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
