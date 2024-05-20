// countdown value && main value
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  // var name ကို timeterval လို့ပေးတယ် 
  var timeInterval = setInterval(function () {
    // timerleft က 1 ထက်ကြီးရင် စိုတဲ့ အဓိပ္ပာယ် ဖြစ်တယ် ပီးရင် textContent နဲ့စာထည့်တယ်
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } // timerleft က 1 နဲ့ ညီမျှ တယ်
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } // အချိန်သတ်မှတ်တယ်
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// 
function displayMessage() {
  var wordCount = 0;

  // 
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
