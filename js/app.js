var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        intro: 'Welcome to this tutorial <small>It is all about Vue.JS</small>',
        isViewed: true,
        todos: [{
                text: 'Item 1',
                id: 1
                    },
            {
                text: 'Item 2',
                id: 2
                    },
            {
                text: 'Item 3',
                id: 3
                    },
            {
                text: 'Item 4',
                id: 4
                    },
            {
                text: 'Item 5',
                id: 5
            },
        ],
        count: 0,
        img: 'https://vuejs.org/images/logo.png',
        url: '',
        humanizedUrl: 'N/A'
    },
    methods: {
        countUp: function () {
            this.count++;
        },
        countDown: function () {
            this.count--;
        },
        humanizeUrl: function () {
            var a = document.createElement('a');
            a.href = this.url;
            this.humanizedUrl = a.hostname;
        }
    }
});
