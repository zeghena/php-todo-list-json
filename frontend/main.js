const { createApp } = Vue;

const app = createApp({
    data() {
        return{
            title: "Todo List JSON",
            taskList: [
                {
                    text: 'Dormire',
                    done: true,
                },
                {
                    text: 'Mangiare',
                    done: false,
                },
                {
                    text: 'Pescare',
                    done: false,
                }
            ],
        };
    },

});

app.mount("#app");