---
marp: true
paginate: true
---
# リスキリング

JavaScript 第２回（全３回） / 全７回

<!-- 
$theme: gaia
template: invert
-->

<!-- footer: リスキリング JS-2 -->

---
## DOM(Document Object Model)

- HTML などの文書情報を表したモデル。
- モデルで表現されている文書の情報を取得、操作する枠組み

## BOM(Browser Object Model)

- ブラウザの情報に関するオブジェクトモデル
- ブラウザの情報を取得、操作する枠組み

---
## やってみよう！(DOM)

~~~
<html>
    <body>
        <div id="myid">Hello!</div>
    </body>
    <script type="text/javascript>
        var element = document.getElementById("myid");
        console.log(element.innerText);
        element.innerHTML = '<span style="color:#ff0000;">Good Evening!</span>';
    </script>
</html>
~~~

---
## やってみよう！(BOM)

~~~
<html>
    <body>
        <div id="myid">Hello!</div>
    </body>
    <script type="text/javascript>
        console.log(location.href);
    </script>
</html>
~~~

---
## イベント１

- あるイベントが発生したときに、 JavaScript プログラムを起動させることが出来る。
- これをイベントの登録などと表現し、プログラムが起動することを発火などと表現する。

~~~
<input type="button" value="button" id="myid2" onclick="buttonClick()">

<script type="text/javascript">
    function buttonClick(){
        alert('Click');
    }
</script>
~~~

---
## イベント２

HTML と JavaScript ファイルは、別ファイルに分けておきたい。

~~~
function buttonClick(){
    alert('Click');
}

let button = document.getElementById('myid2');
button.addEventListener('click', butotnClick);
~~~

---
## ネットワークから情報を取得する１

https://open-meteo.com/ を使用して、天気情報を取得してみましょう。

まずはブラウザで以下にアクセスしてみてください。

https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo


文字列がいろいろ表示されると思います。この中には、東京の一週間分の気温の情報が含まれています。

これらの文字列は JSON(JavaScript Object Notation)形式 と呼ばれ、 JavaScript ではよく使われます。

次のページで、 JavaScript でこの情報を取得してみましょう。

---
## ネットワークから情報を取得する２

~~~
const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo';

fetch(url)
  .then(data => data.json())
  .then(json => console.log(json))
~~~

これで、 JSON 形式の情報がコンソールに表示されます。

---
## ファイルへの保存

~~~
<a href="#" id="weather" download="weather.json">JSON ダウンロード</a>
~~~

~~~
document.getElementById('weather').addEventListener('click', (event) => {
  // JSON を文字列に治す。
  const json = JSON.stringify({ a: 1, b: 2, c: 3 }, null, '  ');
  // 保存する文字列の Blob オブジェクトを作成
  const blob = new Blob([json], { type: 'application/json' }); 
  // a 要素の href 属性に Object URL を セット
  event.currentTarget.href = window.URL.createObjectURL(blob);
});
~~~

---


---
# テキストファイル（CSV）のI/O
