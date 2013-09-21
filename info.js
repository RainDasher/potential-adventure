
API.on(API.DJ_ADVANCE, songUpdate);
function songUpdate(){
API.sendChat(API.getDJs()[0].username + " is now playing " + API.getMedia().title + " by " + API.getMedia().author);
}
API.sendChat('Info Started');