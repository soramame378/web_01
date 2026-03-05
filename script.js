// フェードイン処理
console.log("JavaScriptは動いています");
// document → HTML全体を管理しているオブジェクト
// querySelectorAll → 指定したクラスをすべて取得する
// '.fade-in' → class="fade-in" が付いている要素を取得

const fadeElements = document.querySelectorAll('.fade-in');


// IntersectionObserver → 要素が画面に入ったか監視する仕組み
// entries → 監視している要素の情報が入る配列
// => は「アロー関数」と呼ばれる書き方

const observer = new IntersectionObserver((entries) => {

    // forEach → 配列の中身を1つずつ取り出す
    entries.forEach(entry => {

        // entry.isIntersecting →
        // その要素が画面内に入っているかどうか（true / false）

        if (entry.isIntersecting) {

            // entry.target →
            // 今画面に入った要素そのもの

            // classList →
            // その要素に付いているclassを操作できる

            // add('active') →
            // activeクラスを追加する
            // → CSSの .fade-in.active が適用される

            entry.target.classList.add('active');
        }
    });

});


// forEach → fadeElementsの中身を1つずつ取り出す
fadeElements.forEach(element => {

    // observer.observe(element) →
    // その要素を監視対象に追加する
    observer.observe(element);

});