const Comment = ({comment}) => {
    console.log("Comment Props:", comment);
    console.log("id:", comment.id);
    return (
        <div>
           <div>id: {comment.id}</div> 
          <div> author: {comment.author}</div>
          <div>body: {comment.body}</div>
          <div></div>
        </div>
    )
}

export default Comment;