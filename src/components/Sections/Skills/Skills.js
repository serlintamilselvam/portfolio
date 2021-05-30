export default {
    name: "Skills",
    props: {
    },
    data() {
        return {
            pageName: "skills",
            isDivisionShown: false,
            indexOfSelectedItem: 0,
            scrollerSection: {
                baseHeight: 420,
                styleObject: {
                    transform: 'translateY(0px)'
                }
            },
            resumeBullets: [{
                label: "Education()",
                icon: 'user-graduate'
            }, {
                label: "Work History()",
                icon: 'history'
            }, {
                label: "Programming Skills()",
                icon: 'laptop'
            },{
                label: "Projects()",
                icon: 'paperclip'
            },{
                label: "Interests()",
                icon: 'palette'
            }]
        }
    },
    methods: {
        loadSkill(chosenIndex) {
            this.setSelectedIndex(chosenIndex)
            this.scrollToSelectedItem(chosenIndex)
        },
        setSelectedIndex(index) {
            this.indexOfSelectedItem = index;
        },
        checkForIndex(index) {
            return (index == this.indexOfSelectedItem) ? true : false
        },
        scrollToSelectedItem(index) {
            let editedTransform = -this.scrollerSection.baseHeight*index
            this.scrollerSection.styleObject.transform = `translateY(${editedTransform}px)`
        },
        showSection(isVisible) {
            this.isDivisionShown = isVisible
        }
    }
}