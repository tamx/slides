---
marp: true
paginate: true
---
# リスキリング

JavaScript 第１回（全３回） / 全７回

<!-- 
$theme: gaia
template: invert
-->

<!-- footer: リスキリング JS-1 -->

---
## JavaScript とは？

### 百聞は一見にしかず、習うより慣れろ

というわけで動かしてみましょう。

JavaScript はブラウザでも動かせます。次のページにサンプルがありますので、 HTML ファイルとして入力して、実際に動かしてみてください。

※コピー＆ペーストを活用してください。

---
## sample0010.html

~~~sample0010.html
<html>
<head>
    <meta charset="UTF-8">
    <script type="text/javascript">
        // コメント
        alert("Hello World!);
        /* アラートが表示されます。 */
    </script>
</head>
<body>
</body>
</html>
~~~

---
## 時計を表示してみましょう。

~~~sample0020.html
<html>
<head>
    <meta charset="UTF-8">
    <script type="text/javascript">
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        document.writeln(h + "時" + m + "分" + s + "秒");
    </script>
</head>
<body>
</body>
</html>
~~~

---
## JavaScript 部分を別ファイルに分離してみましょう。

~~~sample0030.html
<html>
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="sample0030.js"></script>
</head>
<body>
</body>
</html>
~~~

~~~sample0030.js
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
document.writeln(h + "時" + m + "分" + s + "秒");
~~~

---
## コメントの書き方

~~~sample0040.html
<html>
<head>
    <meta charset="UTF-8">
    <script type="text/javascript">
        // １行コメント
        alert("Hello World!);
        /*
            複数行コメント
        */
    </script>
</head>
<body>
</body>
</html>
~~~

---
## 変数

- 値（数値や文字列等）を入れる入れ物
- 自由に名前（変数名）を付けることが出来る

~~~
var name = "Tam";   // 名前は Tam
var age = 17;       // 年齢は 17歳
~~~

---
## 定数

値の変わることのない変数

~~~
const adult_age = 18;           // 成人年齢は 18歳
const country = "日本";         // 国籍は日本
const sales_tax_rate = 0.10;    // 消費税率は 10%
~~~

定数をうまく利用すると、成人年齢が引き下げられたときや、消費税率が変更されたときなどに、必要最低限の変更で対応することが出来るようになる。

---
## 算術演算子１

- 加算： +
- 減算： -
- 乗算： *
- 除算： /
- 余算： %

~~~
var a = 2 + 3 * 4;
console.log(a);
var b = 5 - 6 / 3 + 7;
console.log(b);
var c = 10 % 3;
console.log(c);
~~~

---
## 算術演算子２

以下のような使い方も出来ます。

~~~
var a = 1;
console.log(a);
a = a + 1;
console.log(a);
a = a - 1;
console.log(a);
~~~

これらの演算は非常によく使うので、

`a = a + 1` の部分は `a++` や `++a` とも記述できます。

`a = a - 1` の部分は `a--` や `--a` とも記述できます。

---
## 文字列連結演算子

~~~
var str = "香川" + "県";
console.log(str);
var loc = str + "高松市";
console.log(loc);
var name = "Tam";
var age = 17;
var msg = name + "さんは" + age + "歳"; // 数値は自動で文字列に変換されて結合
console.log(msg);
~~~

---
## 代入演算子

~~~
var a = 2;
a = a + 3;
a += 3;

var b = 10;
b = b * 10;
b *= 10;
~~~

---
## 比較演算子

|比較演算子|意味|
|---|---|
|==| 左右が等しければ true 、それ以外は false |
| > | 左が右より大きければ true 、それ以外は false |
| < | 左が右より小さければ true 、それ以外は false |
| >= | 左が右以上のとき true 、それ以外は false |
| <= | 左が右以下のとき true 、それ以外は false |
| != | 左右が等しくなければ true 、等しいとき false |
| === | 左右の「値」と「型」がどちらも一致すれば true 、それ以外は false |

※注意： `=>` や `=<` といった演算子は間違いです。

---
## 論理演算子

### 基本

- true（真）または false（偽）

論理演算子

- AND「&&」：左右の両方が true のとき、全体を true とする
- OR「||」：左右のどちらかまたは両方が true のとき、全体を true とする
- NOT「!」：「!」の後の式の論理を反転する

~~~
var x = 1;
var y = 1;
var result1 = (x == 1) && (y == 2);
console.log(result1);
var result2 = (x == 1) || (y == 2);
console.log(result2);
var result3 = !((x == 1) && (y == 2));
console.log(result3);
~~~
