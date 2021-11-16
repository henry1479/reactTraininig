
import { CommentBlock } from "./parts/CommentBlock";
import { UserInfo } from "./parts/UserInfo";

export const Comment = () => {
    const author = {
        avatarUrl: 'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-5.jpg',
        name: 'Radisson'
    }
    const comment = {
        text: 'Lorem ipsum',
        date: new Date().toLocaleDateString()
    }
    return(
        <div className="comment">
            <UserInfo user={author} />
            <CommentBlock comment={comment}/>
        </div>
    )
}