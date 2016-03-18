$(document).ready(function() {
  var baseURL= 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/products'

  if(location.pathname === '/') {
    $.ajax({
      url: baseURL,
      type: 'GET',
      dataType: 'JSON',
      success: function(data) {
        var tbody = $('#products')
        data.products.forEach(function(product){
          var name = product.name;
          var row = '<tr><td>' + product.name + '</tr></td>';
          tbody.append(row);
        });
      }

    });
  }
  $('#new_product').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: baseURL,
      type: 'POST',
      dataType: 'JSON',
      data: $(this).serializeArray(),
      success: function(data) {
        console.log(data.product);
        location.href = '/';
      }
    });
  });
});
