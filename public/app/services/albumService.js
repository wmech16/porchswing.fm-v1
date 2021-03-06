var app = angular.module('musicProj').service('albumService', function($http) {
	var currentAlbum = {};
	this.getCurrentAlbum = function() {
		return currentAlbum;
	}
	this.setCurrentAlbum = function(album) {
		currentAlbum = album;
	}
	this.getAlbumInfo = function(id) {
		return $http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/albums/'+ id
		}).then(function(res) {
			return res.data
		})
	}
	// this.getUser = function() {
	// 	return $http({
	// 		method: 'GET',
	// 		url: 'http://localhost:3000/user'
	// 	}).then(function(res) {
	// 		console.log(res);
	// 	})
	// }
	
	this.postReview = function(review, album, userId, averageScore) {
		console.log(userId)
		var albumReview = {
			albumSpotifyId: album.id,
			userId: userId,
			review: review,
			album: album.name,
			artist: album.artists[0].name
		}
		return $http({
			method: 'POST',
			url: 'review/'+ albumReview.albumSpotifyId + '/' + userId,
			data:  albumReview
		}).then(function(res) {
			return res;
		});
	
	}
	
	this.getAlbumsReviews = function(albumSpotifyId) {
		return $http({
			method: 'GET',
			url: 'album/' + albumSpotifyId
		}).then(function(res) {
			return res;
		})
	}
	
	this.getUserReviews = function(userId) {
		return $http({
			method: 'GET',
			url: 'user/' + userId
		}).then(function(res) {
			return res;
		})
	}
	
	this.updateReview = function(usersReview) {
		console.log(usersReview);
		return $http({
			method: 'PUT',
			url: 'review/'+ usersReview._id,
			data: {review: usersReview.review}
		})
	}
	
	this.getUser = function(userId) {
		return $http ({
			method: 'GET',
			url: 'users'+ userId
		}).then(function(res) {
			console.log(11, res)
			return res;
		})
	}
    
});