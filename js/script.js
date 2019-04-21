// Файл отвечает за отрисовку курток по шаблону

(function () {
    
    var coatsArr = Array.from(window.coats);
    
    var filter = document.querySelector('.filter');
    
    var similarCoat = document.querySelector('template')
        .content
        .querySelector('.coat__card');
    console.log(similarCoat);
    
    var title = document.querySelector('h1');
    var results = document.querySelector('.results');
    /* Как рендерить куртки */
    
    var createCoat = function (obj) {
        var coat = similarCoat.cloneNode(true);
        coat.querySelector('img').src = obj.photos;
        coat.querySelector('.coat__name').textContent = obj.name;
        coat.querySelector('.coat__price').textContent = obj.price;
        coat.querySelector('.coat__sizes').src = obj.sizes;
        coat.querySelector('.coat__code').textContent = obj.code;
        console.log(coat);
        
        return coat;
    };
    
    
    var renderCoats = function (arr) {
        var fragment = document.createDocumentFragment();        
        for (var i = 0; i < arr.length; i++) {
            fragment.appendChild(createCoat(arr[i]));
            console.log(fragment);
        }
        results.appendChild(fragment);
        
    };
    
    /**/
    
    // filter.addEventListener('change', function () {
    //     renderCoats(coatsArr);
    // })
    
})();