import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default class CommentList extends React.Component{
  constructor(props){
    super(props);

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
 
  toggleUpdate(comment){
    this.props.toggleCommentUpdate(comment);
  }

  handleUpdate(comment){
    this.props.onCommentUpdate(comment);
  }

  handleDelete(comment){
    this.props.onCommentDelete(comment);
  }

  render() {
  	var commentNodes = this.props.data.map(function(comment) {
      if(comment.editing) {
        return (
          <div key={comment.id}>
            <CommentForm editComment={comment} onCommentSubmit={this.handleUpdate} />
          </div>
        );
      } else {
        return (
          <div key={comment.id}>
            <Comment author={comment.author}>
              {comment.text}
              <button type="button" onClick={() => this.toggleUpdate(comment)}>Edit</button>
              <button type="button" onClick={() => this.handleDelete(comment)}>Delete</button>  
            </Comment>
          </div>
        );
      }
    }, this);

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
