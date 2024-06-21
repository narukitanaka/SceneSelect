///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}


///////////////////////////////////////////
//フィルター > カテゴリーの「非表示」を非表示にする
///////////////////////////////////////////
function hideItems() {
  const listItems = document.querySelectorAll('.list-menu__item');
  listItems.forEach(function(item) {
      if (item.textContent.includes('非表示')) {
          item.style.display = 'none';
      }
  });
}

// ページ読み込み時に一度実行し、その後も定期的にチェック
document.addEventListener('DOMContentLoaded', function() {
  hideItems();
  setInterval(hideItems, 1000); // 1000ミリ秒（1秒）ごとに実行
});


///////////////////////////////////////////
//GSAP
//////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function() {
  gsap.from(".top-concept .inner .ashirai", {
    duration: 1, 
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".top-concept .inner",
      start: "top bottom",
    }
  });
});


///////////////////////////////////////////
//FAQ アコーディオン
///////////////////////////////////////////
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});


///////////////////////////////////////////
//ご利用ガイド タブ
///////////////////////////////////////////
const tabMenus = document.querySelectorAll('.tab_menu-item');
console.log(tabMenus);

tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

function tabSwitch(e) {
  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab_menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab_menu-item');
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab_panel-box');
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

}