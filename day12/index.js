const toggles = document.querySelectorAll('.faq-toggle')
toggles.forEach(toggle => {
  toggle.addEventListener('click', function () {
    // toggle 如果没有则添加反之删除
    this.parentNode.classList.toggle('active')
  })
})