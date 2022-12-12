export default {
    // some needed states
    state () {
        return {
            id: "",
            title: "",
            thumbnail: "",
            video: "",
            isPlaying: false,
            timeToContinue: 0
        }
    },

    // some needed mutations
    mutations: {
        REGISTER(state, payload) {
            state.id = payload.id;
            state.title = payload.title;
            state.thumbnail = payload.thumbnail;
            state.video = payload.video;
            state.isPlaying = false;

            // this will use to continue or not the video if use leave the detail view
            state.timeToContinue = 0;
        },

        PLAY(state) {
            state.isPlaying = true;
        },

        PAUSE(state) {
            state.isPlaying = false;
        },

        SET_TIME_TO_CONTINUE(state, payload) {
            state.timeToContinue = payload.timeToContinue;
        }
    },

    // some needed actions
    actions: {
        register(context, { id, title, thumbnail, video }) {
            context.commit("REGISTER", { id, title, thumbnail, video });
        },

        play(context) {
            context.commit("PLAY");
        },

        pause(context) {
            context.commit("PAUSE");
        },

        setTimeToContinue(context, { timeToContinue }) {
            console.log(timeToContinue)
            context.commit("SET_TIME_TO_CONTINUE", { timeToContinue });
        }
    }
};