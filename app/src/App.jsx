import { app } from ".";

function App() {
  
  
  return (
    <main id="app" className="mt-12">
      <main>
        <div className="container">
          <div className="row">
          <div class="col-12 text-center">
              <img
                src="src/img/agora_logo.png"
                alt="Agora Logo"
                className="block img-fluid"
              />
          </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <div className="btn-group" role="group">
              {allUsers.map((singleUser) => {
                return <div key={singleUser.id}>{singleUser.name}</div>
              
                })}
                <button
                  type="button"
                  class="btn btn-primary mr-2"
                  onClick={placeCall('{{singleUser.id}}','{{singleUser}}')}
                  >
                    Call {singleUser}
                
                  <span className="badge badge-light">
                    {getUserOnlineStatus(singleUser.id)}

                  </span>
                </button>
                
              </div>  
            </div>
          </div>

          {/*Incoming Call */}
          <div className="row my-5" >

          </div>
        </div>


    </main>

    </main>
            
  );
}

export default App