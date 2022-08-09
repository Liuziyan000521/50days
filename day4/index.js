const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
    // toggle(): 如果有active 则删除 反之添加
    search.classList.toggle('active');
    input.focus();
})
