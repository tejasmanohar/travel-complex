'use strict'

angular.module 'travelApp'
.controller 'MainCtrl', ($scope, $http) ->
  $scope.awesomeThings = []

  $http.get('/api/things').success (awesomeThings) ->
    $scope.awesomeThings = awesomeThings


  $scope.addThing = ->
    return if $scope.newThing is ''
    $http.post '/api/things',
      name: $scope.newThing

    $scope.newThing = ''

  $scope.deleteThing = (thing) ->
    $http.delete '/api/things/' + thing._id

  $scope.today = ->
    $scope.dt = new Date()
    return

  $scope.today()
  $scope.clear = ->
    $scope.dt = null
    return

  # Disable weekend selection
  $scope.disabled = (date, mode) ->
    mode is "day" and (date.getDay() is 0 or date.getDay() is 6)

  $scope.toggleMin = ->
    $scope.minDate = (if $scope.minDate then null else new Date())
    return

  $scope.toggleMin()
  $scope.open = ($event) ->
    $event.preventDefault()
    $event.stopPropagation()
    $scope.opened = true
    return

  $scope.dateOptions =
    formatYear: "yy"
    startingDay: 1

  $scope.formats = [
    "dd-MMMM-yyyy"
    "yyyy/MM/dd"
    "dd.MM.yyyy"
    "shortDate"
  ]
  $scope.format = $scope.formats[0]
  return
