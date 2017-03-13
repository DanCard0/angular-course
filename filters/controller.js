angular.module("mainModule", [])

.filter("removeHtml", function(){
	return function(texto){
		return texto;
	}
})