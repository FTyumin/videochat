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
      
  }

    // Start Pusher Presence Channel Event Listeners

    


    
}
        
    

    