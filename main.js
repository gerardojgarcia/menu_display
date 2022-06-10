const topicOneEl = document.getElementById('topic-click-one')
const topicTwoEl = document.getElementById('topic-click-two')
const topicThreeEl = document.getElementById('topic-click-three')
const topicDescEl = document.getElementById('topic-desc')
const menuItemEl = document.querySelectorAll('.menu-item button')




let itemDescriptions = ['Hello, welcome to the first description.', 'This is the second description', 'This is the third description']



topicOneEl.addEventListener('click', () => {
    topicDescEl.innerHTML = `<p >"${itemDescriptions[0]}"</p>`
})


topicTwoEl.addEventListener('click', () => {

    topicDescEl.innerHTML = `<p >"${itemDescriptions[1]}"</p>`


})



topicThreeEl.addEventListener('click', () => {

    topicDescEl.innerHTML = `<p >"${itemDescriptions[2]}"</p>`


})