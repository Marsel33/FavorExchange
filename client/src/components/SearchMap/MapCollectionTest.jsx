import { useEffect, useState } from 'react';

export const MapCollectionTest = ({users}) => {
  var myMap;
  var placemarkCollections = {};
  var placemarkList = {};  

  const profilesAddress = users.map(item => (item))  

  let ymaps = window.ymaps;
                                          
  // const [map, setMap] = useState();  
  
  const [show, setShow] = useState(true)   
                                               
  useEffect(() => {                         
    if (profilesAddress.length && show)                 
    ymaps.ready(init);   
  }, [profilesAddress.length]);

  function init() {
    // Создаем карту
    setShow(prev => !prev)
    myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10,
      controls: ['zoomControl','geolocationControl', 'routeButtonControl'],      
      zoomMargin: [20],
    });



    var control = myMap.controls.get('routeButtonControl');

    // Зададим координаты пункта отправления с помощью геолокации.
    control.routePanel.geolocate('from');

    // Откроем панель для построения маршрутов.
    control.state.set('expanded', true);



    const location = ymaps.geolocation;
        location.get({
          mapStateAutoApply: true
      })
    .then(
      function(result) {
          // Получение местоположения пользователя.
          var userAddress = result.geoObjects.get(0).properties.get('text');
          var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
          // Пропишем полученный адрес в балуне.
          result.geoObjects.get(0).properties.set({
              balloonContentBody: '<h4>Я здесь</h4>' 
      });
          myMap.geoObjects.add(result.geoObjects)
      },
      function(err) {
          console.log('Ошибка: ' + err)
      }
    );



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
              hintContent: address,
              iconContent: name,              
              balloonContentBody: [
                '<address>',
                `<strong>${name}</strong>`,
                '<br/>',
                `Адрес: ${address}`,
                '<br/>',
                `Описание: ${description}`,
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
