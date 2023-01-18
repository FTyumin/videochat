const app = {
    callPlaced: false,
    client: null,
    localStream: null,
    mutedAudio: false,
    mutedVideo: false,
    userOnlineChannel: null,
    onlineUsers: [],
    incomingCall: false,
    incomingCaller: "",
    agoraChannel: null
};

function initUserOnlineChannel() {
    const userOnlineChannel = pusher.subscribe("presence-online-channel")

    userOnlineChannel.bind("pusher:subscription_succeded", (data) =>{

        let members = Object.keys(data.members).map((k) => data.members[k])
        this.onlineUsers = members
    })

    userOnlineChannel.bind("pusher:member_added", (data) => {
        let user = data.info;
        // check user availability
        const joiningUserIndex = this.onlineUsers.findIndex(
            (data) => data.id === user.id
        )
        if (joiningUserIndex < 0) {
            this.onlineUsers.push(user);
          }
        
    })}
        
    

    