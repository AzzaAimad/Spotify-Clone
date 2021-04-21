import React, { useContext } from "react";
import "./App.css";
import Login from "./Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { DateLayerContext } from "./DataLayer";

//we use instance to connect to spotify services
// allows us to connect react with spotify
const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useContext(DateLayerContext);
  //const [{user,token}, dispatch]=useDataLayerValue();
  //only run when the App loads
  //used to track url or somthing else
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // for the security we blind the url
    //access to the (access_token) and store it inside (_token)
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //setToken(_token);
      //these methods it's spotify methods
      // we see to spotify this is the _token that allows you to talk with react App
      spotify.setAccessToken(_token);
      //get me the user account
      spotify.getMe().then((user) => {
        //console.log("show me user", user);
        //dispatch the data to reducer--> exactly state.user
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      // get data from spotify
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      }) 
     
      spotify.getPlaylist('5EJriwWJRMjM45eBXiNFIV').then(response=>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
        
        )

    }

    //console.log("i have a token",token)
  }, []);
  //console.log("show me user", user);
  //console.log("show me token", token);
  return (
    <div className="App">
      {token?(
        //I'm logged In
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
