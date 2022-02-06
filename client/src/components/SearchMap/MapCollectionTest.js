export const MapCollectionTest = () => {


var myMap;
var placemarkCollections = {};
var placemarkList = {};
 
// Список городов и магазинов в них
var shopList = [
    {
        'cityName': 'Москва',
        'shops': [
            {'name': 'Рязанский проспект, 6Ас21', 'des': 'The best place'},
            {'name': 'Ленинский проспект, 47с2', 'des': 'Good place as well'}
        ]
    },    
];

let ymaps = window.ymaps;

ymaps.ready(init);
 
function init() {
 
    // Создаем карту
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 8,
        controls: [
            'zoomControl'
        ],
        zoomMargin: [20]
    });
 
    for (var i = 0; i < shopList.length; i++) {       
 
        // Создаём коллекцию меток для города
        var cityCollection = new ymaps.GeoObjectCollection();
 
        for (var j = 0; j < shopList[i].shops.length; j++) {
            var shopInfo = shopList[i].shops[j];

            console.log(shopInfo);

            const geocoder = ymaps.geocode(shopInfo.name)

            
            geocoder.then(

              // eslint-disable-next-line no-loop-func
              function (res) {
                const coordinates = res.geoObjects.get(0).geometry.getCoordinates()

                const placemark = new ymaps.Placemark(
                  coordinates, {
                    'hintContent': shopInfo,
                    'balloonContent': shopInfo.des
                  },                
                )
                if (!placemarkList[i]) placemarkList[i] = {};
                placemarkList[i][j] = placemark;
     
                // Добавляем метку в коллекцию
                cityCollection.add(placemark);
              }
              
            )       
        }
 
        placemarkCollections[i] = cityCollection;
 
        // Добавляем коллекцию на карту
        myMap.geoObjects.add(cityCollection);
 
    } 
}
 
return (
  <div className="main__map ymaps-layers-pane">
    <div style={{ width: '600px', height: '580px', borderRadius: '7px'}} id="map" />
  </div>
)

}

