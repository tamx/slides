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
