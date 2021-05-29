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
        showSection() {
            console.log("Inside this")
            this.showDivision = !this.showDivision
        }
    }
}