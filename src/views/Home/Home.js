export default {
    name: 'Home',
    props: {
    },
    data() {
      return {
        typedSettings: {
          content: ['Full Stack Developer&#128187;', 'MERN Stack Developer&#128376;', 'JS Developer&#128526;', 'Foodie&#128523;'],
          cursorChar: '|',
          showCursor: true,
          loop: true,
          typeSpeed: '50',
          backSpeed: '10',
        },
        resumeLink: "https://drive.google.com/file/d/1s7-eTwBpqhmV6aCVGQVu9dS6ZB9UikfS/view?usp=sharing",
        smallDescription: "Tech enthusiast who loves building complex scalable web applications"
      }
    }
  }