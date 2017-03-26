ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [59.93865798144006,30.322893567459108],
            zoom: 17
        }, {
            searchControlProvider: "yandex#search"
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: "default#image",
            iconImageHref: "img/icon-map-pin.svg",
            iconImageSize: [67, 100],
            iconImageOffset: [-30, -100]
        });

    myMap.geoObjects.add(myPlacemark);
});
