console.log("From the file");

const apiId = "67be8dd5"
const apiKey = "2ccded816bad80964973fe15d5b43332"

function getItemData(searchTerm, callback) {
  $.ajax({
    url: `https://api.nutritionix.com/v1_1/search/${searchTerm}?appId=${apiId}&appKey=${apiKey}`,
    type: 'get',
    success: function(data) {
      console.log(data);
      callback(data)
    }
  })
}


function getNutritionData(element, callback) {
	$.ajax({
    url: `https://api.nutritionix.com/v1_1/item?id=${element.dataset.itemId}&appId=${apiId}&appKey=${apiKey}`,
    type: 'get',
    success: function(data) {
      console.log(data);
      callback(data, element)
    }
  })
}
