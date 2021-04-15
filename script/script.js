$(function () {


    $("button").click(function () {
        var memChk = ["test01", "guest", "youjs", "dsoer"];
        // 가입되어있는 아이디
        var output = "";

        var inputID = $("#chkID").val().trim();

        var chkTF = true;

        $.each(memChk, function (i, v) { // i = 가져온 배열의 인덱스, v = 해당 인덱스의 실제 값

            if (inputID == v) {
                output = "사용중인 ID입니다.";
                chkTF = false;
            }

        });


        if (chkTF) {
            output = "사용가능한 ID입니다.";
        }


        $("#output").html(output);

    });


});













