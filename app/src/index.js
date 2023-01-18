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

    userOnlineChannel.bind("pusher:member_removed", (data) => {
        let user = data.info;
        const leavingUserIndex = this.onlineUsers.findIndex(
          (data) => data.id === user.id
        );
        this.onlineUsers.splice(leavingUserIndex, 1);
      });

      userOnlineChannel.bind("pusher:subscription_error", (err) => {
        console.log("Subscription Error", err);
      });

      userOnlineChannel.bind("an_event", (data) => {
        console.log("a_channel: ", data);
      });
        
    

    