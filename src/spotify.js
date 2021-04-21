//authentication to spotify use spotify authorization

//1-click login button
//2-redirect to spotiy login page
//3-redirect to home page once logged in (localhost)

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "6e62942447d9432cbcf75f48815e6529";

//spotify allows you to do things
// options you can use on spotify app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
//get user permission to acces spotify app
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
//console.log(window.location.hash.substring(1).split('&'))
export const getTokenFromUrl=()=>{
    return window.location.hash
          .substring(1).split('&')
          .reduce((initial,item)=>{
              //acessToken =mySuperSecretKey&name=sonny
              let parts=item.split('=');
              initial[parts[0]]=decodeURIComponent(parts[1]);
             
              return initial;
          },{})
}