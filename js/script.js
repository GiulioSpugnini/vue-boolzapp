console.log('OK VUE', Vue);

const app = new Vue({
    el: '#root',
    data: {
        inputText: '',
        userMessages: ['Ciao domani vado in piscina, ok?'],
        answer: 'OK',
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [{
                name: 'Michele',
                avatar: '_1.jpg',
            },
            {
                name: 'Fabio',
                avatar: '_2.jpg',
            },
            {
                name: 'Samuele',
                avatar: '_3.jpg',
            },
            {
                name: 'Luisa',
                avatar: '_4.jpg',
            },
        ]
    },
    methods: {
        addMessage() {
            this.userMessages.push(this.inputText);
        },
    },
})