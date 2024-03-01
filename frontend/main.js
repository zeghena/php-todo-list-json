const { createApp } = Vue;

const app = createApp({
    data() {
        return{
            title: "Todo List JSON",
            taskList: [
                // {
                //     text: 'Dormire',
                //     done: true,
                // },
                // {
                //     text: 'Mangiare',
                //     done: false,
                // },
                // {
                //     text: 'Pescare',
                //     done: false,
                // }
            ],
        };
    },

    methods: {
        // metodo che recupera la taskList dalla API
        fetchTaskList() {
            // todo: chiama la API via Axios
        }
    },

    mounted() {
        // todo:
        // prendi la lista dalla api e visualizzala
        this.fetchTaskList();
    }

});

app.mount("#app");