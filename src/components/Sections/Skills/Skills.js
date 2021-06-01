export default {
    name: "Skills",
    props: {
    },
    data() {
        return {
            pageName: "resume",
            isDivisionShown: false,
            indexOfSelectedItem: 0,
            scrollerSection: {
                baseHeight: 48,
                styleObject: {
                    transform: 'translateY(0px)'
                }
            },
            resumeBullets: [{
                label: "<Education />",
                icon: 'user-graduate',
                content: [{
                    title: 'Bishop&#39;s University, Canada',
                    date: '2019 - 2021',
                    subtitle: 'Master of Science in Computer Science'
                }, {
                    title: 'Anna University, India',
                    date: '2012 - 2016',
                    subtitle: 'Bachelor of Engineering in Computer Science'         
                }]
            }, {
                label: "<Work History />",
                icon: 'history',
                content: [{
                    title: 'CherryTin Online private limited, India',
                    subtitle: 'Software Developer',
                    date: '2016-2019',
                    roles: ['- Worked as a full stack developer in a retail industry',
                        '- Published REST APIs using Express.js and consumed in front end',
                        '- Developed and maintained e-commerce websites(WeddingWishlist.com and Cherrytin.com) using MERN stack.',
                        '- Integrated Shipping modules and Payment gateways.',
                        '- Designed the database architecture and created schemas.']
                }, {
                    title: 'CGI Inc, Canada',
                    subtitle: 'Technical Consultant - Part Time, Canada',
                    date: '2020-Present',
                    roles: ['- Assisted BMO employees across North America for IT-related issues or requests over telephone and email.',
                        '- Created incidents in ServiceNow, monitored the status and progressed towards resolution of assigned incidents.']
                }]
            }, {
                label: "<Skills />",
                icon: 'laptop',
                languages: [{
                    icon: 'html5',
                    brand: 'fab',
                    name: 'HTML 5'
                }, {
                    icon: 'sass',
                    brand: 'fab',
                    name: 'SASS'
                },{
                    icon: 'css3-alt',
                    brand: 'fab',
                    name: 'CSS'
                },{
                    icon: 'js-square',
                    brand: 'fab',
                    name: 'JavaScript'
                },{
                    icon: 'react',
                    brand: 'fab',
                    name: 'React.js'
                },{
                    icon: 'angular',
                    brand: 'fab',
                    name: 'Angular'
                },{
                    icon: 'vuejs',
                    brand: 'fab',
                    name: 'Vue.js'
                },{
                    icon: 'node',
                    brand: 'fab',
                    name: 'Node'
                },{
                    icon: 'npm',
                    brand: 'fab',
                    name: 'NPM'
                },{
                    icon: 'php',
                    brand: 'fab',
                    name: 'PHP'
                },{
                    icon: 'java',
                    brand: 'fab',
                    name: 'Java'
                },{
                    icon: 'python',
                    brand: 'fab',
                    name: 'Python'
                },{
                    icon: 'database',
                    brand: 'fas',
                    name: 'MySQL'
                }, {
                    icon: 'leaf',
                    brand: 'fas',
                    name: 'MongoDB'
                }, {
                    icon: 'magento',
                    brand: 'fab',
                    name: 'Magento'
                }, {
                    icon: 'laravel',
                    brand: 'fab',
                    name: 'Laravel'
                },{
                    icon: 'wordpress',
                    brand: 'fab',
                    name: 'Wordpress'
                }, {
                    icon: 'git',
                    brand: 'fab',
                    name: 'Git'
                }, {
                    icon: 'jira',
                    brand: 'fab',
                    name: 'Jira'
                }, {
                    icon: 'cloud',
                    brand: 'fas',
                    name: 'Azure'
                }, {
                    icon: 'docker',
                    brand: 'fab',
                    name: 'Docker'
                }]
            },{
                label: "<Projects />",
                icon: 'paperclip',
                content: []
            },{
                label: "<Interests />",
                icon: 'palette',
                content: []
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
            this.scrollerSection.styleObject.transform = `translateY(${editedTransform}rem)`
        },
        showSection(isVisible) {
            this.isDivisionShown = isVisible
        }
    }
}