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
  render () {
    return (
      <p>{this.props.content}</p>
    );
  }
}

class Comment extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.commentHeader}</h3>
        <p>{this.props.commentBody}</p>
        <input type="text" name="newContent" placeholder="Type something"
          onChange={(e) => this.addBody(e)}
        />
        <button onClick={(e) => this.changeBody(e)}>Change body</button>
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


