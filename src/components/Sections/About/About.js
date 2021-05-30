export default {
    name: "About",
    props: {
    },
    data() {
        return {
            showDivision: false,
            pageName: "about"
        }
    },
    methods: {
        showSection(isVisible) {
            this.showDivision = isVisible
        }
    }
}