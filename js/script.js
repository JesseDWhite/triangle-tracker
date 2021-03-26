$(document).ready(function () {
    $("#form-action").submit(function () {
        event.preventDefault()
        const sideOne = parseInt($("#side-1").val())
        const sideTwo = parseInt($("#side-2").val())
        const sideThree = parseInt($("#side-3").val())
        let result

        if (sideOne === sideTwo === sideThree) {
            result = "Equalateral"
        } else if (sideOne !== sideTwo !== sideThree) {
            result = "Scalene"
        } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
            result = "Isosceles"
        }
        $("#output-triangle").text(result);
    })
})

// if (sideOne && sideTwo && sideThree === sideOne && sideTwo && sideThree) {
    //     result = "Equalateral"
    // } else if (sideOne || sideTwo || sideThree === sideOne || sideTwo || sideThree) {
    //     result = "Isosceles"
    // } else if (sideOne || sideTwo || sideThree !== sideOne || sideTwo || sideThree) {
    //     result = "Scalene"
    // } else {
    //     $(".output-triangle").text("NOT A TRIANGLE. TRY HARDER NEXT TIME.")
    // }