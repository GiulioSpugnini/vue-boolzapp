console.log('OK VUE', Vue);

const app = new Vue({
    el: '#root',
    data: {
        inputText: '',
        userMessages: 'Ciao domani vado in piscina, ok?',
        answer: 'NO',
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
            this.inputText = '';
        },
        isActive(index) {
            if (this.contact === index) return this.contact.name;
        },
        getDate() {
            const currentDate = new Date().toLocaleDateString();
            return currentDate;
        },
        getHour() {
            const hours = new Date().getHours();
            const minutes = new Date().getMinutes();
            const seconds = new Date().getSeconds();
            const currentTime = `${hours}:${minutes}:${seconds}`;
            return currentTime;
        },
    },
})