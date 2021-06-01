export default {
    name: "About",
    props: {
    },
    data() {
        return {
            showDivision: false,
            pageName: "about",
            contents: [
                'I am a recent computer science post graduate from Bishop&#39;s University, Canada&#127891;',
                '"If I don&#39;t have some cake soon, I might die." I follow Stanley from The Office when it comes to food. Biggest office&#127970; fan',
                'Not a fan of Netflix and chill, I <span class="beating-heart">&#128151;</span> activities like biking, sky-diving which rushes my adrenaline&#128693;'
            ],
            icons: [{
                name: "user-graduate",
                color: "#65D183",
                value: " Master of Science, Bishop's University, Canada"
            }, {
                name: "map-marker-alt",
                color: "#65D183",
                value: " Quebec, Canada"
            }]
        }
    },
    methods: {
        showSection(isVisible) {
            this.showDivision = isVisible
        }
    }
}