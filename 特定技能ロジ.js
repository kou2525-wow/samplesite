document.addEventListener('DOMContentLoaded', (event) => {
    // スムーズスクロール機能
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ここに追加の機能を実装できます
    // 例: フォームのバリデーション、動的コンテンツの読み込みなど
});