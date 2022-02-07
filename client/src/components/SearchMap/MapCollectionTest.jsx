import { useEffect, useState } from 'react';

export const MapCollectionTest = ({users}) => {
  var myMap;
  var placemarkCollections = {};
  var placemarkList = {};

  // Список городов и магазинов в них
  // var shopList = [
  //   {
  //     cityName: 'Москва',
  //     shops: [
  //       { name: 'Рязанский проспект6Ас21', des: 'The best place' },
  //       { name: 'Ленинский проспект, 47с2', des: 'Good place as well' },
  //       { name: 'ул. Тверская, 7', des: 'Have a good time' },
  //       { name: 'ул. Академика Королева, 12', des: 'Что? Где? Когда?' },
  //     ],
  //   },
  // ];

  const profilesAddress = users.map(item => (item))  
  console.log(profilesAddress);


  let ymaps = window.ymaps;

  const [map, setMap] = useState();  
   
  // ymaps.ready(init);     

  console.log(users);

  useEffect(() => {
    if (profilesAddress.length > 1) 
    setMap(ymaps.ready(init));   
  }, [profilesAddress.length]);

  function init() {
    // Создаем карту
    myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10,
      controls: ['zoomControl'],
      zoomMargin: [20],
    });

    for (var i = 0; i < profilesAddress.length; i++) {
      // Создаём коллекцию меток для города
      var cityCollection = new ymaps.GeoObjectCollection();

      // for (var j = 0; j < shopList[i].shops.length; j++) {
        var shopInfo = profilesAddress[i].adress;

        // console.log(profilesAddress[i].description);

        const geocoder = ymaps.geocode(shopInfo);

        const description = profilesAddress[i].description;
        const name = profilesAddress[i].name
        const id = profilesAddress[i].id
        const address = profilesAddress[i].adress

        geocoder.then(
          
          // eslint-disable-next-line no-loop-func
          function (res) {
            const coordinates = res.geoObjects.get(0).geometry.getCoordinates();

            const placemark = new ymaps.Placemark(coordinates, {
              iconContent: name,              
              balloonContentBody: [
                '<address>',
                `<strong>${name}</strong>`,
                '<br/>',
                `Адрес: ${address}`,
                '<br/>',
                `Подробнее: <a href="http://localhost:3000/user/${id}">Страница профиля</a>`,
                '</address>'
            ].join('')           
            }, {
              preset: 'islands#darkOrangeStretchyIcon', 
              // iconImageHref: 'theater.png',             
            });
            if (!placemarkList[i]) placemarkList[i] = {};
            placemarkList[i] = placemark;

            // Добавляем метку в коллекцию
            cityCollection.add(placemark);
          }
        );
      // }

      placemarkCollections[i] = cityCollection;

      // Добавляем коллекцию на карту
      myMap.geoObjects.add(cityCollection);
    }    
  }

  return (
    

      <body>
        <div className="main__map ymaps-layers-pane">
          <div
            style={{ width: '600px', height: '580px', borderRadius: '7px' }}
            id="map"
          />
        </div>
      </body>
  
  );
};
