import { createStore }    from "vuex";

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        get_odd(state) {
            return state.count % 2 === 0 ? "even" : "odd";
        }
    }
});

export default store;