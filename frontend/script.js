const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    sideMenu.classList.toggle('is-active');
});

const vendingMachines = [
    {
        id: 1,
        building: "D棟",
        floor: 1,
        locationDetail: "",

        payment: {
            cash: true,
            ic: true,
            touch: true,
            qr: false,
        },
        drinks: [
      // 水
      { name: "キリン 天然水", price: 120, category: "水" }, 

      // お茶
      { name: "生茶", price: 150, category: "お茶" }, 
      { name: "生茶 麦茶", price: 130, category: "お茶" }, 
      { name: "生茶 ほうじ茶（ミニ）", price: 130, category: "お茶" }, 
      { name: "午後の紅茶 おいしい無糖", price: 150, category: "お茶" }, 
      { name: "午後の紅茶 ミルクティー", price: 180, category: "紅茶" }, 
      { name: "午後の紅茶 レモンティー", price: 180, category: "紅茶" }, 
      { name: "午後の紅茶 FRUITS", price: 170, category: "紅茶" }, 
      { name: "午後の紅茶 ミルクティー（ミニ）", price: 140, category: "紅茶" }, 
      { name: "午後の紅茶 レモンティー（ミニ）", price: 140, category: "紅茶" }, 

      // コーヒー
      { name: "FIRE BLACK", price: 160, category: "コーヒー" },
      { name: "FIRE BLACK（缶）", price: 150, category: "コーヒー" }, 

      // 炭酸・ジュース・その他
      { name: "キリンレモン", price: 130, category: "炭酸" }, 
      { name: "グレフルスカッシュ", price: 140, category: "炭酸" }, 
      { name: "レモンスカッシュ", price: 140, category: "炭酸" },
      { name: "iMUSE ヨーグルトテイスト", price: 170, category: "ジュース" }, 
      { name: "iMUSE FRUITS", price: 170, category: "ジュース" },
      { name: "小岩井 ミルクとココア", price: 140, category: "ジュース" }, 

      // スポーツ・エナジー
      { name: "KIRIN LOVES SPORTS", price: 140, category: "スポーツ" }, 
      { name: "アミノサプリ", price: 140, category: "スポーツ" }, 
      { name: "Mets ENERGY", price: 190, category: "エナジードリンク" } 
        ]

    },
    {
        id: 2,
        building: "D棟",
        floor: 2,
        locationDetail: "エスカレーター近く",

        payment: {
            cash: true,
            ic: true,
            touch: true,
            qr: true,
        },
        drinks: [
            // 水
            { name: "おいしい水 天然水 600ml", price: 110, category: "水" },

            // お茶
            { name: "おーいお茶", price: 150, category: "お茶" },
            { name: "十六茶 麦茶", price: 130, category: "お茶" },

            // コーヒー
            { name: "WONDA モーニングショット", price: 130, category: "コーヒー" },
            { name: "WONDA 金の微糖", price: 130, category: "コーヒー" },
            { name: "WONDA ブラック", price: 130, category: "コーヒー" },
            { name: "WONDA 特製カフェオレ", price: 130, category: "コーヒー" },
            { name: "WONDA コクのブラック", price: 160, category: "コーヒー" },
            { name: "WONDA モーニングアメリカーノ ブラック", price: 160, category: "コーヒー" },
            { name: "WONDA モーニングアメリカーノ ラテ", price: 180, category: "コーヒー" },

            // 炭酸
            { name: "ウィルキンソン タンサン", price: 130, category: "炭酸" },
            { name: "ドデカミン ストロング", price: 140, category: "炭酸" },
            { name: "カルピスソーダ オレンジ", price: 130, category: "炭酸" },

            // ジュース
            { name: "ウェルチ 濃いぶどう", price: 150, category: "ジュース" },
            { name: "カルピスウォーター", price: 150, category: "ジュース" },
            { name: "完熟もも カルピス", price: 140, category: "ジュース" },

            // エナジードリンク
            { name: "モンスターエナジー", price: 210, category: "エナジードリンク" },
        ]
    },
    {
        id: 3,
        building: "E棟(1)",
        floor: 2,
        locationDetail: "",

        payment: {
            cash: true,
            ic: true,
            touch: true,
            qr: true,
        },
        drinks: [
            // 水
            { name: "サントリー 天然水", price: 120, category: "水" },

            // お茶
            { name: "伊右衛門（小）", price: 130, category: "お茶" },
            { name: "伊右衛門", price: 140, category: "お茶" },
            { name: "GREEN DA・KA・RA やさしい麦茶", price: 130, category: "お茶" },

            // コーヒー
            { name: "ワンダ モーニングショット", price: 120, category: "コーヒー" },
            { name: "クラフトボス カフェラテ（ミニ）", price: 150, category: "コーヒー" },
            { name: "プレミアムボス ブラック", price: 160, category: "コーヒー" },
            { name: "ボス 無糖ブラック", price: 120, category: "コーヒー" },
            { name: "ボス レインボーマウンテンブレンド", price: 120, category: "コーヒー" },
            { name: "ボス 贅沢微糖", price: 120, category: "コーヒー" },
            { name: "ボス アイスコーヒー", price: 130, category: "コーヒー" },
            { name: "UCC BLACK無糖", price: 120, category: "コーヒー" },

            // 炭酸・ジュース・その他
            { name: "マウンテンデュー", price: 130, category: "炭酸" },
            { name: "MATCH", price: 150, category: "炭酸" },
            { name: "伊右衛門 京都レモネード", price: 160, category: "ジュース" },
            { name: "なっちゃんりんご", price: 140, category: "ジュース" },
            { name: "飲むヨーグレット", price: 140, category: "ジュース" },

            // スポーツ・エナジー
            { name: "ポカリスエット", price: 160, category: "スポーツ" },
            { name: "ドデカミン ストロング", price: 130, category: "エナジードリンク" },
            { name: "オロナミンC", price: 120, category: "エナジードリンク" },
            { name: "レッドブル", price: 200, category: "エナジードリンク" },
            { name: "モンスターエナジー", price: 200, category: "エナジードリンク" }
        ]
    }
]

const categoryButtons = document.querySelectorAll('.cat-btn');
const searchResults = document.getElementById('search-results');

categoryButtons.forEach(function(button){
    button.addEventListener('click',function(){
        const targetCategory = this.getAttribute('data-category');
        console.log("選んだカテゴリ: " + targetCategory);

        const matchedMachines = vendingMachines.filter(function(machine){
            // その自販機の drinks の中に、一つでも（some）カテゴリが一致する飲み物があるか判定
            return machine.drinks.some(function(drink){
                return drink.category === targetCategory;
            });
        });
        console.log("見つかった自販機の数: " + matchedMachines.length);
        console.log(matchedMachines);
    });
});