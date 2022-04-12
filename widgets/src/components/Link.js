import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      /*if user holds the CTRL or command key, return early to open link in new tab, no need to change up the rest*/
      return;
    }
    event.preventDefault(); /*prevent page reload*/
    window.history.pushState(
      {},
      "",
      `${href}`
    ); /*change the url based on what the user clicks on*/
    const navEvent = new PopStateEvent(
      "popstate"
    ); /*send an event to all links*/
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
