console.log('OK VUE', Vue);

const app = new Vue({
    el: '#root',
    data: {
        isActive: false,
        inputText: '',
        searchText: '',
        currentContact: {
            name: 'Michele',
            avatar: '_1',
            messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    isClicked: false,
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    isClicked: false,
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received',
                    isClicked: false,
                },
            ],
            lastAccess: 'Ultimo accesso alle 20:00',
        },


        user: {
            name: 'Elisa',
            avatar: '_io'
        },
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        isClicked: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        isClicked: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        isClicked: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        isClicked: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        isClicked: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received',
                        isClicked: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        isClicked: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        isClicked: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        isClicked: false,
                    }
                ],
            },
            {
                name: 'Carlo',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        isClicked: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        isClicked: false,
                    }
                ],
            },
        ],
    },
    methods: {

        addMessage() {
            const newUserMessage = {
                date: '10/01/2020 15:30:55',
                text: this.inputText,
                status: 'sent'
            };

            this.currentContact.messages.push(newUserMessage);
            setTimeout(this.addAnswer, 1000);
            this.inputText = '';
        },
        addAnswer() {
            const newAnswerMessage = {
                date: '10/01/2020 15:30:55',
                text: 'ok',
                status: 'received'
            };
            this.currentContact.messages.push(newAnswerMessage);
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
            const hour = this.getHour();
            this.currentContact = {
                name: this.contacts[index].name,
                avatar: this.contacts[index].avatar,
                messages: this.contacts[index].messages,
                lastAccess: 'Ultimo accesso alle ' + hour
            };
        },
        isVisible() {
            return this.contact.visible;
        },

        searchContact() {
            const word = this.searchText;
            this.contacts.forEach(contact => {
                if (!contact.name.toLowerCase().includes(word.toLowerCase())) contact.visible = false;
                if (this.searchText == '') contact.visible = true;
            });

        },
        deleteMessage() {
            const newUserMessage = {
                date: '10/01/2020 15:30:55',
                text: this.inputText,
                status: 'sent'
            };
            this.currentContact.messages.splice(newUserMessage, 1);
        },
        lastMessage(contact) {
            // return contact.messages[length - 1].text;
            // console.log(contact.messages.length);

        }
    },
})