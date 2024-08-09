const UserAvatarImgComponent = (props) => {
    return(
        <div className="userImg">
            <span className="rounded-circle">
                <img src={props.img} alt="" />
            </span>
        </div>
     )
    }
    
    export default UserAvatarImgComponent;