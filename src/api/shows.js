import Vue from 'vue'
export const Image = ({
    get(handle) {
        Vue.http.get('images/')
            .then(function (response) {
                handle(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
})