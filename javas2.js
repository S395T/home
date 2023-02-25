setInterval(function() {
  stringwrite();}, 100)
var string = '1';
var stringa = 0;
function stringwrite(){
    document.write('<html lang="ja"><body bgcolor="BLACK"><head><title>black</title></head><center><font color="green" size="+1">');
  var setint = Math.floor(Math.random()*1000000*Math.floor( Math.random() * 1000000 ))
   document.write(setint+"="+((setint-(setint % 4649))/4649)+"x+"+(setint % 4649));
  stringa++;
  if(stringa >= 15){
    document.close();
    stringa = 0;
  }
}
