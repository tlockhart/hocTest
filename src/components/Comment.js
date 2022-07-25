const Comment = ({comment, color}) => {
    console.log("Comment Props:", comment);
    console.log("id:", comment.id);
    return (
        <div>
           <div style={{color}}>id: {comment.id}</div> 
          <div> author: {comment.author}</div>
          <div>body: {comment.body}</div>
          <div></div>
        </div>
    )
}

export default Comment;