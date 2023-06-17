import $ from "jquery";

// $(document).ready(function () {
//     $('body').on('submit', '.js-auth-form', function (e) {
//         e.preventDefault();
//
//         let form_action = $(this).attr('action');
//         let form_backurl = $(this).find('input[name="backurl"]').val();
//
//         $.ajax({
//             type: "POST",
//             url: '/ajax/auth.php',
//             data: $(this).serialize(),
//             timeout: 3000,
//             error: function (request, error) {
//                 if (error == "timeout") {
//                     alert('timeout');
//                 } else {
//                     alert('Error! Please try again!');
//                 }
//             },
//             success: function (data) {
//                 $('#authModal .modal-body').html(data);
//
//                 $('#authModal form').attr('action', form_action);
//                 $('#authModal input[name=backurl]').val(form_backurl);
//             }
//         });
//
//         return false;
//     });
// });