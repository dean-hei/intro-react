import React, {Component} from "react";

let elems = {
    header: "Dinosaurs are awesome",
    author: "Steathly Stegosaurus",
    body: "Check out this body property",
    comment: "First!!"
  };
  
  class PostTitle extends Component {
    render() {
      return <h1>{this.props.header}</h1>;
    }
  }
  
  class Author extends Component {
    render() {
      return (
            <p>by {this.props.author}</p>
        );
    }
  }
  
  class Content extends Component {
    render() {
      return (
        <p>{this.props.body}</p>
      );
    }
  }
  
  class Comments extends Component {
      render () {
          return (
              <div>
                  <h2>Comments:</h2>
                  <p>{this.props.comment}</p>
              </div>
          )
      }
  }

  class Page extends Component {
      render () {
          return (
              <div>
                  <PostTitle header={elems.header} />
                  <Author author={elems.author} />
                  <Content body={elems.body} />
                  <Comments comment={elems.comment} />
              </div>
          )
      }
  }
  
  export default function Post() {
    return <Page />;
  }
  