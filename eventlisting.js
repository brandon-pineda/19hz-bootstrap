$(document).ready(function() {
    $('#main-table').DataTable( {
		"order": [[0, 'asc']],
		"aoColumnDefs" : [
		 {
		   'bSortable' : false,
		   'aTargets' : [ 0, 1, 2, 3, 4, 5]
		 }],
		"pageLength": 25
    });

    $('#main-table').on( 'page.dt', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    });


});
