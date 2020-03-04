import React, {Component} from "react";
import './App.css';

let elems = {
  header: 'Dinos be dinoing',
  author: 'Pterodactyl',
  content: 'Listen up people!!'
}

let commentStuff = [
  {
    commentHeader: 'Rawr',
    commentBody: 'Dinobama says hi!'
  },
  {
    commentHeader: 'Radasaurus',
    commentBody: 'RAWR XD'
  }
]

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <h3>{this.props.author}</h3>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.content
    }
    this.changeContent = this.changeContent.bind(this);
  }
  
  changeContent(e) {
    // render alert on click
    let answer = prompt("What would you like the body to say?");
    // update state
    this.setState((prevState, props) => {
      return {
        body: answer
      }
    })
  }
  
  render () {
    return (
      <div>
        <p>{this.state.body}</p>
        <button onClick={this.changeContent}>Click to edit</button>
      </div>
    );
  }
}

class Comment extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.commentHeader}</h3>
        <p>{this.props.commentBody}</p>
      </div>
    )
  }
}

class CommentPost extends Component {
  render () {
    let comments = [];
    commentStuff.forEach((comment, index) => {
      comments.push(<Comment commentHeader={comment.commentHeader} commentBody={comment.commentBody} />);
    })
    return (
      <div>
        {comments}
      </div>
    )
  }
}

export default function App() {
  
  return (
    <div>
      <Header header={elems.header} author={elems.author} />
      <Content content={elems.content} />
      <CommentPost />
    </div>
  )
}


