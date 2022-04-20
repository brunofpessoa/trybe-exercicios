function savePreferences() {
  let bgColor = document.getElementById('bg-color-input').value;
  let textColor = document.getElementById('text-color-input').value;
  let fontSize = document.getElementById('font-size-input').value;
  let lineHeight = document.getElementById('line-height-input').value;
  let fontFamily = document.getElementById('font-family-input').value;

  let preferences = {
    bgColor: bgColor,
    textColor: textColor,
    fontSize: fontSize,
    lineHeight: lineHeight,
    fontFamily: fontFamily,
  };

  localStorage.preferences = JSON.stringify(preferences);
  location.reload();
}
function setPreferences(preferences){
  const articleStyle = document.getElementById('article').style;

  articleStyle.backgroundColor = preferences.bgColor;
  articleStyle.color = preferences.textColor;
  articleStyle.fontSize = `${preferences.fontSize}px`;
  articleStyle.lineHeight = `${preferences.lineHeight}px`;
  articleStyle.fontFamily = preferences.fontFamily;
}
function initializePreferences(preferences){
  document.getElementById('bg-color-input').value = preferences.bgColor;
  document.getElementById('text-color-input').value = preferences.textColor;
  document.getElementById('font-size-input').value = preferences.fontSize;
  document.getElementById('line-height-input').value = preferences.lineHeight;
  document.getElementById('font-family-input').value = preferences.fontFamily;
}
function cleanLocalStorage() {
  localStorage.clear();
  location.reload();
}
window.onload = function() {
  if(localStorage.preferences != null){
    const preferences = JSON.parse(localStorage.preferences);
    initializePreferences(preferences);
    setPreferences(preferences);
  }
  document.getElementById('saveBtn').addEventListener('click', savePreferences);
  document.getElementById('clearBtn').addEventListener('click', cleanLocalStorage);
};