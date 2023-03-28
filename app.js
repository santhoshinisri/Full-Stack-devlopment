$(() => {

        $('form').on('submit', () => {
            const $item = $('#input-box').val();
            event.preventDefault();
            console.log($item);

            const $firstDiv = $('<li>').addClass('list-group-item').addClass('todo').html('<h2>'+$item+'</h2>');


            const $firstbutton =
            $('<button>').addClass('btn btn-success').text('Mark Complete').appendTo($firstDiv);

            $('.ul1').append($firstDiv);


            $firstbutton.on('click', () => {
                $('#completed').append($firstDiv);
                $firstbutton.addClass('btn btn-danger').addClass('remove').text('Remove Item');


                $('.remove').on('click', (event) => {
                    event.target.closest('li').remove();
                });
            });


        });

});