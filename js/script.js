console.log('OK VUE', Vue);

const app = new Vue({
    el: '#root',
    data: {
        inputText: '',
        currentContact: {
            name: '',
            avatar: '',
        },
        messages: [{
            userMessages: 'Voglio andare in piscina',
            answer: 'Come vuoi',
        }],

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
            this.messages.push({ userMessages: this.inputText, answer: 'Come vuoi' });
            this.inputText = '';
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
        selectedContact(index) {
            return this.currentContact = { name: this.contacts[index].name, avatar: this.contacts[index].avatar };
        },
    },
})