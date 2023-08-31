---
marp: true
paginate: true
---
# リスキリング

JavaScript 第３回（全３回） / 全７回

<!-- 
$theme: gaia
template: invert
-->

<!-- footer: リスキリング JS-2 -->

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
## 郵便番号から住所変換

今まで学んだことを活かして、入力した郵便番号から住所を保管する Web ページを作成しましょう。

~~~
<input type="text" id="zip"></input>
~~~

~~~
var element = document.getElementById("zip");
console.log(element.value);
~~~

---
## 演習

香川県の郵便番号の CSV が以下の URL から取得できます。

http://etp.xsrv.jp/reskilling/

~~~
const url = "http://etp.xsrv.jp/reskilling/2/37KAGAWA_ZIP_UTF-8.csv";

fetch(url)
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
    // CSV を読み込み
    let csvArray = [];
    let lines = data.split(/\r\n|\n/);
    for (let i = 0; i < lines.length; ++i) {
      let line = lines[i].replace(/"/g, "");
      let cells = line.split(",");
      csvArray.push(cells);
    }
    console.log(csvArray);
  });
~~~

---
## 演習

~~~
function search(zip) {
  for (let index in csvArray) {
    let data = csvArray[index];
    if (data[2] === zip) {
      let address = data[7] + data[8];
      return address;
    }
  }
  return "";
}

let address = search("7600019");
console.log(address);
~~~

---
## 休憩

体を動かして、ストレッチしましょう。
