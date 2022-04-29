function clearFields(event) {
  event.preventDefault();
  document.getElementById('trip-form').reset();
}
document.getElementById('submit').addEventListener('click', clearFields);