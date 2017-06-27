$(document).ready(function() {
            $("#list-complaint").click(
                    function() {
                        $.ajax({
                            url: "http://127.0.0.1:8080/rest/query",
                            jsonp: "callback",
                            dataType: "jsonp",
                            data: {
                                q: "select * from complaint"
                            },
                            success: function( response ) {
                                console.log( response );
                                if($('#complaint_table tr').length > 0){
                                    $("#complaint_table").dataTable().fnDestroy();
                                }
                                $("#complaint_table").dataTable(response);
                            }
                        });
                    }
            )

            $("#add-complaint").click(
                    function() {
                       $.ajax({
                           url: "http://127.0.0.1:8080/rest/update",
                           jsonp: "callback",
                           dataType: "jsonp",
                           data: {
                               q: "insert complaint(content,category_id) values(" + '"'
                               + $("#complaint_text").val()
                               + '","'
                               + $("#category_id").val()
                               + '");'
                           },
                           success: function (response) {
                               console.log(response);
                               $("#list-complaint").click();
                           }
                       })
            });

 });
         