(function(){
  'use strict';

  angular
      .module("mundmische")
      .factory("EntriesService", EntriesService);

  function EntriesService($q, $http) {
    var service = {
      all: all,
      random: all,
      recent: all
    };

    return service;

    function all(limit) {
      return $http.get("/fixtures.json")
          .then(getAllEntriesCompleted)
          .catch(getAllEntriesFailed);

      function getAllEntriesCompleted(response) {
        return response.data;
      }

      function getAllEntriesFailed(error) {
         logger.error('XHR Failed for allEntries.' + error.data);
      }
    }


    function find(id) {
      var response = $http.get("/fixtures.json");
      return response;
    }
  };

})();
