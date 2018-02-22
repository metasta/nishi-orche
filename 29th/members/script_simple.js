/* html lang="ja" */
document.documentElement.setAttribute('lang', 'ja');
document.documentElement.setAttribute('id',   'simple');



/* header */
function navItem(url, text){
 var curr = window.location.pathname.split('/').pop();
 if (curr == '') curr = '.';
 if (curr === url){ return '<a href="'+url+'" class="active">' + text + '</a>';}
 else {return '<a href="'+url+'">' + text + '</a>';}
}
var header = document.createElement('header');
header.innerHTML = ''
 + '<a href="."><p>第29回西オケ</p><p>ご参加の方へ</p></a>'
 + '<ul>'
 + '<li>' + navItem('#journal',   '西オケ報')
 + '<li><a href="..">ホーム</a>'
 + '</ul>';
document.body.insertBefore(header, document.body.firstChild);

var ul = document.createElement('ul');
ul.setAttribute('class','backlink');
ul.innerHTML = ''
 + '<li><a href="..">第29回西オケ トップページへ戻る</a>';
document.getElementsByTagName('main')[0].appendChild(ul);


/* footer#footer */
var footer = document.createElement('footer');
footer.innerHTML = ''
 + '<small class="copyright">&copy; 2017 <u>西日本医科学生</u><u>オーケストラ・フェスティバル</u><u>実行委員会</u></small>';
document.body.appendChild(footer);
