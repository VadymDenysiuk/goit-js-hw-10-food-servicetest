const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body')
const checkboxRef = document.querySelector('.theme-switch__toggle')

checkboxRef.addEventListener('click', onCheckboxRef)
function onCheckboxRef() {
  if(bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)
  }
  else {
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
  }
  
  localStorage.setItem('Theme', bodyRef.className)
}

/* Saving theme across reboots */

if (localStorage.getItem('Theme')) {
bodyRef.classList.add(localStorage.getItem('Theme'))
}
if (localStorage.getItem('Theme') === Theme.DARK) {
  checkboxRef.checked = true;
}