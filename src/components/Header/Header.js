export default {
    name: 'Header',
    data() {
      return {
        showSideNav: false,
        logo: ".Serlin Tamilselvam()",
        links: [{
          name: "home",
          id: "home"
        }, {
          name: "about",
          id: "about"
        }, {
          name: "resume",
          id: "resume"
        }, {
          name: "contact me",
          id: "contact"
        }]
      }
    },
    props: {
    },
    methods: {
      addSeperatorClass: function(index) {
        return (index+1 == this.links.length) ? '' : 'header-option-seperator'
      },
      showNavBar: function() {
        this.showSideNav = true
      },
      hideNavBar: function() {
        this.showSideNav = false
      }
    }
  }