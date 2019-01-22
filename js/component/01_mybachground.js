Vue.component('background',{
    template:
    '<div>'+
        '<img class="pc" src="../assets/telstar_all.jpg">' +
        '<img class="sp" src="../assets/telstar_all_copy.jpg">' +
    '</div>'
})

new Vue({
    el: '#background'
})