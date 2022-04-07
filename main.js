$(document).ready(function(){
    $('#currentDay').append(moment().format('dddd, MMMM YYYY'))
    $('.row').each(function(index, value){
        var time = (value.children[0]).innerHTML
        var txt = (value.children[1])
        var locVal = localStorage.getItem(time)
        if(locVal === null){
            return
        }else{
            console.log(txt)
            txt.innerHTML = locVal
        }

    })
})

$('.row').each(function(index, value){
    // console.log(index, value)
    let currentTime = parseInt(moment().format('H'))
    let text = value.children[0].textContent
    let word = text.split(" ")
    let time = parseInt(word[0])

    if(time < 9){
        time = time + 12
    }

    if(time < currentTime ){ //checks to see if past
        $(value.children[1]).addClass('past')
    } else if (time > currentTime){ //checks to see if future
        $(value.children[1]).addClass('future')
    } else {
        $(value.children[1]).addClass('present')
    }

})

$('button').click(function(event){
    var time = $($(event.target).parent().get()).children('div').text()
    var txt = $($(event.target).parent().get()).children("textarea").val()
    localStorage.setItem(time , txt)
})