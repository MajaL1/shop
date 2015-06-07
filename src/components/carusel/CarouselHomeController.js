angular.module("app").controller("CarouselHomeController", function($scope) {
    $scope.interval = 3000;

    $scope.slides = [
    {img: "http://www.gadgetreview.com/wp-content/uploads/2014/03/LEGO-Ultimate-Collectors-Millennium-Falcon-10179-Box-625x463.jpg", text: "Slide text 1"},
    {img: "http://1.bp.blogspot.com/-dTRWlObZFHI/Tp4mJecTAnI/AAAAAAAAB1s/AxVH_lEV-os/s400/Teddy_bear_family.gif", text: "Slide text 2"},
    ];
});