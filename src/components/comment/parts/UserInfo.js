import { Avatar } from "./Avatatr"



export const UserInfo = (props) => {
    return (
        <div className="user-info">
            <Avatar user={props.user} />
            <div className="user-info__name">
                {props.user.name}
            </div>
        </div>
    )
}