import React from 'react';

export default class CommentForm extends React.Component{
  constructor(props) {
  	super(props);
    if(this.props.editComment)
      this.state = {
        author: this.props.editComment.author, 
        text: this.props.editComment.text, 
        editing: true
      };
    else
      this.state = {author: '', text: '', editing: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      alert('please input something');
      return;
    }

    if(this.props.editComment) {
      this.props.editComment.author = author;
      this.props.editComment.text = text;

      this.props.onCommentSubmit(this.props.editComment);
    } else {
      this.props.onCommentSubmit({author: author, text: text});
    }
    this.state = {author: '', text: '', editing: false};
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" value="Post" />
      </form>
    );
  }
};