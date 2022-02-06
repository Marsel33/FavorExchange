import { users } from '../../data'

export const TestMap = () => {

  const custAddress = users.filter(item => item.address)

let ymaps = window.ymaps;
ymaps.ready(init);
function init() {
 
    // Создание карты.
    const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 12,
    });
 
    // Строка с адресом, который необходимо геокодировать
    // const address = 'Москва, ул. Льва Толстого, 16';
    const address = custAddress[0].address;
 
    // Ищем координаты указанного адреса
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode-docpage/
    const geocoder = ymaps.geocode(address);

    console.log(geocoder);
 
    // После того, как поиск вернул результат, вызывается callback-функция
    geocoder.then(
        function (res) {
 
            // координаты объекта
            var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
 
            // Добавление метки (Placemark) на карту
            var placemark = new ymaps.Placemark(
                coordinates, {
                    'hintContent': address,
                    'balloonContent': 'Время работы: Пн-Пт, с 9 до 20'
                }, {
                    'preset': 'islands#redDotIcon'
                }
            );
 
            myMap.geoObjects.add(placemark);
        }
    );
 
}

return (
  <div className="main__map ymaps-layers-pane">
    <div style={{ width: '600px', height: '580px', borderRadius: '7px'}} id="map" />
  </div>
)

}
