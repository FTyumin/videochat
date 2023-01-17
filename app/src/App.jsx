function App() {
  
  
  return (
    <main id="app">
      <main>
        <div class="container">
          <div class="row">
          <div class="col-12 text-center">
              <img
                src="src/img/agora_logo.png"
                alt="Agora Logo"
                class="block img-fluid"
              />
          </div>
          </div>
        </div>
        <div class="container my-5">
          <div class="row">
            <div class="col">
              <div class="btn-group" role="group">
                {/*% for singleUser in allUsers%*/}
                <button
                  type="button"
                  class="btn btn-primary mr-2"

                  //@click="placeCall('{{singleUser.id}}','{{singleUser}}')"
                ></button>
              </div>  
            </div>
          </div>
        </div>


    </main>

    </main>
            
  );
}

export default App