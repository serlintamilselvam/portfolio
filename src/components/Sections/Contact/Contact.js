export default {
    name: 'Contact',
    props: {
    },
    data() {
        return {
            pageName: "contact",
            isDivisionShown: false,
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        showSection(isVisible) {
            this.isDivisionShown = isVisible
        },
        onSubmit() {
            console.log("On Submit")
        }
    }
}