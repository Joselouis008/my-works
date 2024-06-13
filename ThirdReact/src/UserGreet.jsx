function UserGreet(props){

    return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> :
                              <h2>Please sign up</h2>);

};

export default UserGreet