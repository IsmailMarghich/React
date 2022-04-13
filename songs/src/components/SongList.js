import React from "react";
import { connect } from "react-redux";

const SongList = (props) => {
  const renderedList = props.songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary">Select</button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });

  return <div className="ui divided list">{renderedList}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
