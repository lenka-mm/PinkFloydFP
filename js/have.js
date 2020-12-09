// forma


function forma() {
    var name = document.getElementById('name');
    var nickname=document.getElementById('nickname');
    var darkside = document.getElementById('darkside');
    var wish = document.getElementById('wish');
    var animals = document.getElementById('animals');
    var wall = document.getElementById('wall');

    var darksidea = ["Any Color You Like", "Speak To Me", "Breathe","Brain Damage"];
    var wisha = ["Shine On You Crazy Diamond", "Welcome To The Machine", "Wish You Were Here", "Shine On You Crazy Diamond 2nd Part"];
    var animalsa = ["Pigs On The Wing", "Dogs(Part 1)", "Dogs(Concuson)", "Sheep"];
    var walla = ["Another Brick In The Wall", "Goodbye Blue Sky", "The Thin Ice", "Hey You"];

    if (name.value === '' || name.value == null || name.value.length < 2 || name.value === 'Name' ||
    nickname.value === '' || nickname.value == null || nickname.value.length < 2 || nickname.value === 'Name') {
        alert('Please fill the form correctly');
    } else {
        if (darkside.checked == true) {
            alert('Hey ' + name.value + ', aka ' + nickname.value + ', you should listen to: ' + darksidea[Math.floor(Math.random() * 4)]);
        }
        else if (wish.checked == true) {
            alert('Hey ' + name.value + ', aka ' + nickname.value + ', you should listen to: ' + wisha[Math.floor(Math.random() * 4)]);
        }
        else if (animals.checked == true) {
            alert('Hey ' + name.value + ', aka ' + nickname.value + ', you should listen to: ' + animalsa[Math.floor(Math.random() * 4)]);
        }
        else if (wall.checked == true) {
            alert('Hey ' + name.value + ', aka ' + nickname.value + ', you should listen to: ' + walla[Math.floor(Math.random() * 4)]);
        }
        else {
            alert('You did not  choose an album');
        }}

}



function home() {
    window.location.href = "index.html";
}




var p1 = document.querySelectorAll('#p1');
var p2 = document.querySelectorAll('#p2');
var p3 = document.querySelectorAll('#p3');
var p4 = document.querySelectorAll('#p4');
var p5 = document.querySelectorAll('#p5');
var p6 = document.querySelectorAll('#p6');

p1[0].classList.add('hidden');
p2[0].classList.add('hidden');
p3[0].classList.add('hidden');
p4[0].classList.add('hidden');
p5[0].classList.add('hidden');
p6[0].classList.add('hidden');



function prikazib1() {
    p1[0].classList.remove('hidden');
    p2[0].classList.add('hidden');
    p3[0].classList.add('hidden');
    p4[0].classList.add('hidden');
    p5[0].classList.add('hidden');
    p6[0].classList.add('hidden');
};
function prikazib2() {
    p1[0].classList.add('hidden');
    p2[0].classList.remove('hidden');
    p3[0].classList.add('hidden');
    p4[0].classList.add('hidden');
    p5[0].classList.add('hidden');
    p6[0].classList.add('hidden');
};
function prikazib3() {
    p1[0].classList.add('hidden');
    p2[0].classList.add('hidden');
    p3[0].classList.remove('hidden');
    p4[0].classList.add('hidden');
    p5[0].classList.add('hidden');
    p6[0].classList.add('hidden');
};
function prikazib4() {
    p1[0].classList.add('hidden');
    p2[0].classList.add('hidden');
    p3[0].classList.add('hidden');
    p4[0].classList.remove('hidden');
    p5[0].classList.add('hidden');
    p6[0].classList.add('hidden');
};
function prikazib5() {
    p1[0].classList.add('hidden');
    p2[0].classList.add('hidden');
    p3[0].classList.add('hidden');
    p4[0].classList.add('hidden');
    p5[0].classList.remove('hidden');
    p6[0].classList.add('hidden');
};
function prikazib6() {
    p1[0].classList.add('hidden');
    p2[0].classList.add('hidden');
    p3[0].classList.add('hidden');
    p4[0].classList.add('hidden');
    p5[0].classList.add('hidden');
    p6[0].classList.remove('hidden');
};
