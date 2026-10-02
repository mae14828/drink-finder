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

    }
]