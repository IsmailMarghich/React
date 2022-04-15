import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/create" exact component={StreamCreate} />
          <Route path="/edit" exact component={StreamEdit} />
          <Route path="/delete" exact component={StreamDelete} />
          <Route path="/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;