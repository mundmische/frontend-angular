(function() {
  'use strict';

  angular
      .module('mundmische')
      .controller('HomeIndexController', HomeIndexController)

  function HomeIndexController(EntriesService) {
    var viewModel = this

    // initialize properties
    viewModel.randomEntries = [];
    viewModel.recentEntries = [];

    // set properties
    randomEntries();
    recentEntries();

    function randomEntries() {
      return EntriesService.random(30).then(function(data) {
        viewModel.randomEntries = data;
        return viewModel.randomEntries;
      });
    }

    function recentEntries() {
      return EntriesService.recent(10).then(function(data) {
        viewModel.recentEntries = data;
        return viewModel.recentEntries;
      });
    }
  };

})();
