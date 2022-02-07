import { useEffect, useState } from 'react';

export const MapCollectionTest = () => {
  var myMap;
  var placemarkCollections = {};
  var placemarkList = {};

  // Список городов и магазинов в них
  var shopList = [
    {
      cityName: 'Москва',
      shops: [
        { name: 'Рязанский проспект6Ас21', des: 'The best place' },
        { name: 'Ленинский проспект, 47с2', des: 'Good place as well' },
        { name: 'ул. Тверская, 7', des: 'Have a good time' },
        // { name: 'ул. Академика Королева, 12', des: 'Что? Где? Когда?' },
      ],
    },
  ];

  let ymaps = window.ymaps;

  const [map, setMap] = useState();  
   
  // ymaps.ready(init);     

  console.log(shopList[0].shops.length);

  useEffect(() => {
    if (shopList[0].shops.length > 1) 
    setMap(ymaps.ready(init));   
  }, [shopList[0].shops.length]);

  function init() {
    // Создаем карту
    myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10,
      controls: ['zoomControl'],
      zoomMargin: [20],
    });

    for (var i = 0; i < shopList.length; i++) {
      // Создаём коллекцию меток для города
      var cityCollection = new ymaps.GeoObjectCollection();

      for (var j = 0; j < shopList[i].shops.length; j++) {
        var shopInfo = shopList[i].shops[j];

        console.log(shopInfo);

        const geocoder = ymaps.geocode(shopInfo.name);

        const description = shopInfo.des;

        geocoder.then(
          
          // eslint-disable-next-line no-loop-func
          function (res) {
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();

            console.log(coordinates);

            console.log('then is here');

            const placemark = new ymaps.Placemark(coordinates, {
              // 'hintContent': 'shopInfo',
              balloonContent: description,
            });
            if (!placemarkList[i]) placemarkList[i] = {};
            placemarkList[i][j] = placemark;

            // Добавляем метку в коллекцию
            cityCollection.add(placemark);
          }
        );
      }

      placemarkCollections[i] = cityCollection;

      // Добавляем коллекцию на карту
      myMap.geoObjects.add(cityCollection);
    }

    var suggestView = new ymaps.SuggestView(
      'address', // ID input'а
      {
        offset: [-2, 3], // Отступы панели подсказок от её положения по умолчанию. Задаётся в виде смещений по горизонтали и вертикали относительно левого нижнего угла элемента input.
        width: 300, // Ширина панели подсказок
        results: 3, // Максимальное количество показываемых подсказок.
      }
    );
  }

  return (
    <div>
      <label for="address">
        Адрес: <input type="text" id="address"></input>
      </label>

      <body>
        <div className="main__map ymaps-layers-pane">
          <div
            style={{ width: '600px', height: '580px', borderRadius: '7px' }}
            id="map"
          />
        </div>
      </body>
    </div>
  );
};
