const { createApp } = Vue;

const app = createApp({
    data() {
        return{
            title: "Persistent Todo List",
            todoList: [
                'Dormire',
                'Mangiare',
                'Pescare'
            ],
        };
    },

});

app.mount("#app");