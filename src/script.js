/* html lang="ja" */
document.documentElement.setAttribute('lang', 'ja');


/* header#header */
function navItem(url, text){
 var curr = window.location.pathname.split('/').pop();
 if (curr === url){ return '<a href="'+url+'" class="active">' + text + '</a>';}
 else {return '<a href="'+url+'">' + text + '</a>';}
}
var header = document.getElementById('header');
if (header){
 header.innerHTML = ''
 + '<div class="container">'
 + '<a href="." class="brand"></a>'
 + '<ul class="nav">'
 + '<li>' + navItem('about.html',    '西オケとは')
 + '<li>' + navItem('maestros.html', '先生紹介')
 + '<li>' + navItem('members.html',  'ご参加の方へ')
 + '<li>' + navItem('contact.html',  'お問い合わせ')
 + '</ul>'
 + '</div>';
}

/* div#tools */
var tools = document.getElementById('tools');
if (tools) {
 tools.innerHTML = ''
 + '<div class="margin">'
 +  '<a class="sns twitter " href="https://twitter.com/nishi_orche"></a>'
 +  '<a class="sns facebook" href="https://www.facebook.com/NishiOrche/"></a>'
 + '</div>';
}

/* footer#footer */
var footer = document.getElementById('footer');
if (footer) {
 footer.innerHTML = ''
 + '<ul class="sitemap">'
 +  '<li><a href=".">トップページ</a>'
 +  '<ul>'
 +   '<li><a href="./#concert">演奏会のご案内</a>'
 +  '</ul>'
 + '<li><a href="about.html">西オケとは</a>'
 +  '<ul>'
 +   '<li><a href="about.html#message">実行委員長より</a>'
 +   '<li><a href="about.html#past">過去の公演</a>'
 +  '</ul>'
 + '<li><a href="maestros.html">先生紹介</a>'
 +  '<ul>'
 +   '<li><a href="maestros.html#conductor">指揮者</a>'
 +   '<li><a href="maestros.html#trainers">トレーナー</a>'
 +  '</ul>'
 + '<li><a href="members.html">ご参加の方へ</a>'
 +  '<ul>'
 +   '<li><a href="members.html#entry">エントリーについて</a>'
 +   '<li><a href="members.html#announcements">お知らせ</a>'
 +  '</ul>'
 + '<li><a href="contact.html">お問い合わせ</a>'
 +  '<ul>'
 +   '<li><a href="contact.html#address">連絡先</a>'
 +   '<li><a href="contact.html#staff">実行委員</a>'
 +  '</ul>'
 + '</ul>'
 + '<small class="copyright">&copy; 2017 <u>西日本医科学生</u><u>オーケストラ・フェスティバル</u><u>実行委員会</u></small>';
}