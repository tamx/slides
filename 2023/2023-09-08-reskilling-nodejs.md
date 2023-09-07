---
marp: true
paginate: true
---
# リスキリング

第４回 Node.js / 全７回

<!-- 
$theme: gaia
template: invert
-->

<!-- footer: リスキリング Node.js -->

---
## WiFi

### SSID
- 2.4GHz: etp-reskilling01a
- 5GHz: etp-reskilling01b

### Password
- z6qsewi5

---
## git

- バージョン管理システム
- 「分散型」

## GitHub

- git を「集中管理」するための Web サービス

---
## GitHub を使ってみよう！

1. GitHub にアカウントを作成する。
1. 新しいリポジトリを作成する。
1. VSCode で clone する。
1. 何かファイルを作って、 commit する。
1. push する。
1. GitHub 上にファイルが来ていることを確認する。

---
## VSCode で clone

1. 「Ctrl + Shift + P」でコマンドパレットを開く。
1. 「gitcl」と入力し、「Git: Clone」コマンドを選択。「Clone From GitHub」を選択する。
1. GitHub にサインインするように求められたら、サインインプロセスを実行する。
1. リポジトリの URL を入力する。
1. プロジェクトの複製先となるローカル ディレクトリを選択 (または作成) する。

---
## 試してみよう！

前回の宿題の模範解答を、以下の GitHub に置いてあります。

https://github.com/tamx/reskilling-sample.git

試しに clone して実行してみましょう。

---
## Node.js とは？

- JavaScript の実行環境
- ブラウザがなくても、 JavaScript コードを実行できる。
- Web サーバーなどを JavaScript で作成できる。

注：ブラウザ上で動かしているわけではないので、 window.～ とか document.～ とかは使えません。

---
## 動かしてみよう。

test.js
~~~
console.log("Hello, World!");
~~~

実行
~~~
% node ./test.js
~~~

---
## 練習

Node.js はブラウザ上で動かしているわけではないので、 HTML は必要ありません。

~~~
let i = 1;

function display() {
  console.log(i);
  i++;
}

setInterval(display, 1000);
~~~

---
## サーバー

Node.js で HTML を配信してみましょう。

通常 express パッケージを用いるので、以下のコマンドを入力して、 express パッケージをインストールします。

~~~
// e-とぴあ の PC はプロキシがあるので、以下が必要です。
npm config set proxy http://proxy.e-topia-kagawa.local/
npm config set https-proxy http://proxy.e-topia-kagawa.local/
// 自宅や自分の PC を使用する際には、上記は必要ありません。
npm install express
~~~

---

~~~
var express = require("express");
const app = express();

//8080番ポートでサーバー
app.listen(8080, () => {
  console.log("サーバー起動中");
});

app.get("/", (req, res) => {
  res.send("<html>Hello!</html>");
  res.end();
});
~~~

---
## HTML ファイルの配信

Node.js の中に HTML を埋め込んでいくのは大変なので、別に用意した HTML ファイルを配信してみましょう。

index.html
~~~
<html>
  <body>
    Hello, World!
  </body>
</html>
~~~

~~~
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
~~~

---
## JSファイルの配信

別に用意した JS ファイルも配信してみましょう。

index.html
~~~
<script type="text/javascript" src="sample.js"></script>
~~~

sample.js
~~~
alert("Hello World!");
~~~

~~~
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/sample.js", (req, res) => {
  res.sendFile(__dirname + "/sample.js");
});
~~~

---
## 変数渡し

views/index.html
~~~
<html>
  <body>
    <p><%= name %>さん、こんにちは。</p>
  </body>
</html>
~~~
~~~
npm install ejs
~~~
~~~
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render("index", { name: "Tam" });
});
~~~

---
## 小技

JS回で郵便番号をネットワークから取得すると、セキュリティエラーが出ていました。

以下のようにすると、エラーが出ずに取得できます。

~~~
app.get("/zip.csv", (req, res) => {
  fetch("http://etp.xsrv.jp/reskilling/3/37KAGAWA_ZIP_UTF-8.csv")
    .then((resp) => resp.text())
    .then((text) => {
      res.send(text);
      res.end();
    });
});
~~~

---
## 演習

JS回で作成した郵便番号検索ツールを Node.js に対応させてみましょう。
