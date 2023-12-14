setInterval(function() {
  stringwrite();}, 7)
var string =　'<head><meta charset="UTF-8"><title>誕生日おめでとうございます！</title></head><body bgcolor="f5f5f5" style="width:800px; margin:0 auto;"><span style="font-family:"><span style="font-size:48px"><span style="color:#27ae60"><strong>誕生日おめでとうございます！</strong></span></span></span></p><span style="font-size:22px"> Happy Birthday|</br>￣￣￣￣⌵￣￣￣</br>▕▔▔▔▔▔▔▔▔▔▔▔╲</br>▕╮╭┻┻╮╭┻┻╮╭▕╮╲</br>▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏</br>▕╭┻┻┻┛┗┻┻┛ 　▏　 ▏</br>▕╰━━━┓┈┈┈╭╮▕╭╮▏</br>▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏</br>▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏</br></br></br>そして俺が野原ひろしだ</br>　r～⌒～⌒～⌒ヽ</br>　/　　　　　　　　)</br>（　r～⌒～⌒～⌒`ｲ</br>　)ｉ/⌒＼　 /⌒＼|</br>（　(/⌒＼) (/⌒＼ )</br>i⌒ﾍ〉 ／ヽ　／ヽ |</br>|　 ﾐ 　　・・　 |</br>ヽ＿ｨ　　　｜　 |</br>　　|　　　｜　　|</span><style>.button{font-size: 160%;}.table{font-size: 160%;}</style><style>.button{color: black;background-color: #e0e0e0;}.table{color: black;background-color: #e0e0e0;}</style></center></body></html>';
var stringa = 0;
function stringwrite(){
   document.write(string.slice(0,1));
   string = string.slice(1,string.length);
}
