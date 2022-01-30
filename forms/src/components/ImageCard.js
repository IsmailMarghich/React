import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.setSpans);
    /*when our image has loaded we want to set spans*/
  }

  setSpans = () => {
    const height = this.ImageRef.current.clientHeight;

    const spans = Math.ceil(
      height / 10
    ); /*calculate the amount of spans we need for an image*/

    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    /*allocate exactly the amount of spans neeeded to fit the image*/
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.ImageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
