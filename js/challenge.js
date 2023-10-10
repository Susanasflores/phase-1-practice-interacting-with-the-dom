//See the timer increment every second once the page has
//loaded.
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    console.log(count)
    count = 0;
    setInterval(function () {
        count++
        counter.innerText = count;
    }, 1000);

//Manually increment and decrement the counter using the
//plus and minus buttons.
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
plus.addEventListener("click", function() {
    count++;
    counter.innerText = count;
  });
  
  minus.addEventListener("click", function() {
    count--;
    counter.innerText = count;
  });
  //"Like" an individual number of the counter. I should
  // see the count of the number of "likes" associated 
  //with that number displayed.
  const heart = document.getElementById("heart")
  console.log(heart)
  heart.addEventListener("click", function() {
    count ++
    console.log(`The button has been liked  ${count} times.`);
  });
//Pause the counter, which should:pause the counter
//disable all buttons except the pause button
//switch the label on the button from "pause" to "resume"
const pause = document.getElementById("pause")
console.log(pause)
console.log("resume")
pause.addEventListener("click", function() {
  clearInterval(intervalId);
  pause.disabled = true;
  plus.disabled = true;
  minus.disabled = true;
  heart.disabled = true;
  resume.disabled = true;
  pause.textContent = "Resume";
});

const resume = document.createElement("button");
  resume.textContent = "Resume";
  
  resume.addEventListener("click", function() {
    intervalId = setInterval(function () {
      count++;
      counter.innerText = count;
    }, 1000);
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    resume.disabled = true;
    resume.textContent = "Resume";
  });
//leave a comment
//find id
const textId = document.getElementById("comment-input")
console.log(textId)
textId.innerText = ""
})


