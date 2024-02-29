const { createApp } = Vue;

const app = createApp({
    data() {
        return{
            title: "Persistent Todo List",
        };
    },

});

app.mount("#app");