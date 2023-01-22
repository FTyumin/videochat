const app = {
  data:{
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
  },
    


mounted() {
  this.initUserOnlineChannel()
},

methods:

  function initUserOnlineChannel() {
      const userOnlineChannel = pusher.subscribe("presence-online-channel")

      userOnlineChannel.bind("pusher:subscription_succeded", (data) => {
        let members = Object.keys(data.members).map((k) => data.members[k])
        this.onlineUsers = members
      })
  
    userOnlineChannel.bind("pusher:member_added", (data) => {
      let user = data.info;
      // check user availability
      const joiningUserIndex = this.onlineUsers.findIndex(
        (data) => data.id === user.id
      );
      if (joiningUserIndex < 0) {
        this.onlineUsers.push(user);
      }
    })

    userOnlineChannel.bind("pusher:member_removed", (data) =>{
      let user = data.info
      const leavingUserIndex = this.onlineUsers.findIndex(
        (data) => data.id ===user.id
        )
        this.onlineUsers.splice(leavingUserIndex,1)
    })


    userOnlineChannel.bind("pusher:subscription_error", (err) =>{
      console.log("a_channel: ",data)
    })

    userOnlineChannel.bind("an_event", (data) => {
      console.log("a_channel: ", data)
    })

    userOnlineChannel.bind("make-agora-call", (data) => {
      // Listen to incoming call. This can be replaced with a private channel

      if (parseInt(data.userToCall) === parseInt(AUTH_USER_ID)) {
        const callerIndex = this.onlineUsers.findIndex(
          (user) => user.id === data.from
        );
        this.incomingCaller = this.onlineUsers[callerIndex]["name"];
        this.incomingCall = true;

        // the channel that was sent over to the user being called is what
        // the receiver will use to join the call when accepting the call.
        this.agoraChannel = data.channelName;
      }
    })
      
  }

    

    


    
}
        
    

    