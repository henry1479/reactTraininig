export const CommentBlock = (props) => {
    return (
        <>
            <div className="comment-text">
                {props.comment.text}
            </div>
            <div className="comment-date">
                {props.comment.date}
            </div>
        </>
    )
} 