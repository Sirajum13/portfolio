const fortunes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "To be, or not to be, that is the question.",
  "The only thing we have to fear is fear itself.",
  "That which does not kill us makes us stronger.",
  "The journey of a thousand miles begins with a single step.",
  "You must be the change you wish to see in the world.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Happiness depends upon ourselves.",
  "It always seems impossible until it's done.",
  "Strive not to be a success, but rather to be of value.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "The only person you are destined to become is the person you decide to be."
];

const stylePresets = [
  ["#702240ff", "#ad6489ff", "#7e5961ff", "Georgia", "20px"],        
  ["#541a63ff", "#d2aae4ff", "#9b59b6", "Courier New", "22px"],    
  ["#2e3486ff", "#a0c4e4ff", "#301499ff", "Verdana", "18px"],     
  ["#4b6831ff", "#bbe593ff", "#375f31ff", "Tahoma", "21px"]     
];

window.onload = function () {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  document.getElementById("fortune-box").textContent = fortunes[randomIndex];
};

function applyStyle(index) {
  const box = document.getElementById("fortune-box");
  const [fontColor, bgColor, borderColor, fontFamily, fontSize] = stylePresets[index];

  box.style.color = fontColor;
  box.style.backgroundColor = bgColor;
  box.style.borderColor = borderColor;
  box.style.fontFamily = fontFamily;
  box.style.fontSize = fontSize;
}
