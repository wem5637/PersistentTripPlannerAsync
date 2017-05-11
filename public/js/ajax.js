var hotels=[];
var restaurants=[];
var activities=[];

// application state



var hotelPromise = Promise.resolve($.ajax({
    method: 'GET',
    url: '/api/hotels',

}))


var restPromise = Promise.resolve($.ajax({
    method: 'GET',
    url: '/api/restaurants',

}))


var activityPromise = Promise.resolve($.ajax({
    method: 'GET',
    url: '/api/activities',

}))



Promise.all([hotelPromise, restPromise, activityPromise])
    .spread(function(hot, rest, activ) {
        hotels = hot;
        restaurants = rest;
        activities = activ;

        //attractionsModule = attractionsModule();
	attractionsModule = initAttractionsModule();
        assignOptions();
    


    })
    .catch(function(err) {
        console.log(err)
    })
