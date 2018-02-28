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
 + '<li>' + navItem('alumni.html',  'OB･OGの方へ')
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
 +  '<li><a href=".">第29回西オケ</a>'
 +  '<ul>'
 +   '<li><a href="./#concert">演奏会のご案内</a>'
 +   '<li><a href="./#ticket">チケット販売</a>'
 +   '<li><a href="./#camp">合宿日程</a>'
 +   '<li><a href="./#link">リンク</a>'
+  '</ul>'
 + '<li><a href="about.html">西オケとは</a>'
 +  '<ul>'
 +   '<li><a href="about.html#concept">概要</a>'
 +   '<li><a href="about.html#message">実行委員長挨拶</a>'
 +   '<li><a href="about.html#past">過去の公演</a>'
 +  '</ul>'
 + '<li><a href="maestros.html">先生紹介</a>'
 +  '<ul>'
 +   '<li><a href="maestros.html#conductor">指揮者</a>'
 +   '<li><a href="maestros.html#trainers">トレーナー</a>'
 +  '</ul>'
 + '<li><a href="alumni.html">OB・OGの方へ</a>'
 +  '<ul>'
 +   '<li><a href="alumni.html#ob-entry">エントリーのご案内</a>'
 +   '<li><a href="alumni.html#donation">ご寄附のお願い</a>'
 +  '</ul>'
 + '<li><a href="entry/">エントリー受付</a>'
 +  '<ul>'
 +   '<li><a href="entry/#news">募集情報</a>'
 +   '<li><a href="entry/latest_entry_table.html">現在の参加状況</a>'
 +   '<li><a href="entry/#steps">エントリーの流れ</a>'
 +   '<li><a href="entry/fee.html">参加費のご案内</a>'
 +   '<li><a href="entry/parts.html">パート紹介</a>'
 +  '</ul>'
 + '<li><a href="members/">ご参加の方へ</a>'
 +  '<ul>'
 +   '<li><a href="members/#journal">西オケ報</a>'
 +   '<li><a href="members/#camp">合宿</a>'
 +   '<li><a href="members/#zentoujitsu">前当日</a>'
 +   '<li><a href="members/#concert">公演・ホール</a>'
 +   '<li><a href="members/#party">打ち上げ</a>'
 +   '<li><a href="members/#goods">グッズ情報</a>'
 +   '<li><a href="members/#deadline">変更受付期限</a>'
 +  '</ul>'
 + '<li><a href="contact.html">お問い合わせ</a>'
 +  '<ul>'
 +   '<li><a href="contact.html#mail-form">メールフォーム</a>'
 +   '<li><a href="contact.html#staff">第29回実行委員</a>'
 +  '</ul>'
 + '</ul>'
 + '<small class="copyright">&copy; 2017 <u>西日本医科学生</u><u>オーケストラ・フェスティバル</u><u>実行委員会</u></small>';
}