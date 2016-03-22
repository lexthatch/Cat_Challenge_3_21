app.factory("catService", function($http, $q)) {
    var service = {
        loadCat: function() {
            var deferred = $q.defer();
            http.get = "http://thecatapi.com/api/images/get.php"
                .success(function(data) {
                    deferred.resolve(data[0])
                })
                .error(function(data, status) {
                    deferred.resolve(status)
                })
            return deferred.promise
        }
    }
    return service;
})