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
npm install express
~~~

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
## ファイルの配信

Node.js の中に HTML を埋め込んでいくのは大変なので、別に用意した HTML ファイルを配信してみましょう。

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
