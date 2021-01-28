// set initial value
let count = 0;

// select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);
// var_name.forEach function is used to execute every item present in var_name

btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click' , function (e) {
        // console.log(e.currentTarget.classList);
        // e.currentTarget.classList  this function is used  to determine the represented class name
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0)
        {
            value.style.color = "darkgreen";
        }
        else if(count < 0)
        {
            value.style.color = "darkred";
        }
        else {
            value.style.color = "#230048";
        }
        value.textContent = count;

    });
});
