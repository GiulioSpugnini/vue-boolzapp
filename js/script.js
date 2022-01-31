console.log('OK VUE', Vue);

const app = new Vue({
    el: '#root',
    data: {
        images: ['img/avatar_1', 'img/avatar_2', 'img/avatar_3', 'img/avatar_4', 'img/avatar_5', 'img/avatar_6', 'img/avatar_7', 'img/avatar_8'],
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [{
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            },
        ]
    },
    methods: {},
})