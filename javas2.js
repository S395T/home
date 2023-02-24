setInterval(function() {
  stringwrite();}, 20)
var string = '1';
var stringa = 0;
function stringwrite(){
    document.write('<html lang="ja"><body bgcolor="BLACK"><head><title>black</title></head><center><font color="green" size="+1">');
   document.write(Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 )+""+Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 )+""+Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 )+""+Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 )*Math.floor( Math.random() * 1000000 ));
  stringa++;
  if(stringa >= 15){
    document.close();
    stringa = 0;
  }
}
