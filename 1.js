var a=[1,2,'Hello'];
function masOut(){
    var out = '';
for (i=0;i < a.length; i++){
 out += a[i] + '<br>';
}
    document.getElementById('new').innerHTML=out;
}
