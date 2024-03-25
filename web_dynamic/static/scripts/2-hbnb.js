$(document).ready(function(){
    let lista = {};

    $('input[type="checkbox"]').change(function() {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');

        if ($(this).prop('checked')) {
            lista[amenityId] = amenityName;
        } else {
            delete lista[amenityId];
        }

        $('.amenities h4').text(Object.values(lista).join(', '));
    });

    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5500/api/v1/status/",
        dataType: "json"
    })
    .done(function(response) {
        // Code to execute on success
        if (response.status === 'OK') {
            $("#api_status").addClass('available');
        } else {
            $("#api_status").removeClass('available');
        }
    })
    .fail(function(textStatus, errorThrown) {
        // Code to execute in case of error
        console.error("Error en la solicitud AJAX:", textStatus, errorThrown);
    });
});