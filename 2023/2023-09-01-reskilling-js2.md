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
# テキストファイル（CSV）のI/O
