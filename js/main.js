new Vue({
  el: '#designpage',
  vuetify: new Vuetify(),
  data() {
    return {
      // toolbar btn's
      toolbarBtn: [
        { text: 'Home', href: '#designpage' },
        { text: 'About Me', href: '#about' },
        { text: 'Features', href: '#spec-features' },
        { text: 'Screenshots', href: '#screenshots' },
        { text: 'Team', href: '#team' },
        { text: 'cards', href: '#cards' },
        { text: 'Blog', href: '#blog-post' },
        { text: 'Contact Me', href: '#contact' },
      ],
      // Navigation Drawer
      drawer: null,

      // Showcase


      // Features
      featuresCard: [
        { img: 'img/icon1.png', title: 'Easy To Customize', description: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { img: 'img/icon2.png', title: 'Multipurpose Layout', description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { img: 'img/icon3.png', title: 'Unique Design', description: 'Dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simplytypesetting industry.' },
      ],

      // About


      // Spec Features
      tabs1: [
        {
          title: "Responsive Design",
          icon: 'mdi-check-circle-outline',
          text: "Lorem ipsum madolor sit amet, consectetur adipisicing sed do eiusmod empor incididunt"
        },
        {
          title: "Easy to Use",
          icon: 'mdi-auto-fix',
          text: "Lorem ipsum madolor sit amet, consectetur adipisicing sed do eiusmod empor incididunt"
        },
        {
          title: "Well Documention",
          icon: 'mdi-content-copy',
          text: "Lorem ipsum madolor sit amet, consectetur adipisicing sed do eiusmod empor incididunt"
        },
      ],
      tabs2: [
        {
          title: "Perfect Showcase",
          icon: 'mdi-image-filter-none',
          text: "Lorem ipsum madolor sit amet, consectetur adipisicing sed do eiusmod empor incididunt"
        },
        {
          title: "Unlimited Features",
          icon: 'mdi-heart-outline',
          text: "Lorem ipsum madolor sit amet, consectetur adipisicing sed do eiusmod empor incididunt"
        },
        {
          title: "And Many More",
          icon: 'mdi-plus-circle-outline',
          text: "Lorem ipsum madolor sit amet, consectetur adipisicing sed do eiusmod empor incididunt"
        },
      ],
      selectedTab: "Responsive Design",

      // Screenshots
      imgCarouselScreenshots: [
        { img: 'img/spec-feat-1.jpg' },
        { img: 'img/spec-feat-2.jpg' },
        { img: 'img/spec-feat-3.jpg' },
        { img: 'img/spec-feat-4.jpg' },
        { img: 'img/spec-feat-5.jpg' },
        { img: 'img/spec-feat-6.jpg' },
      ],

      // How it Works
      works: [
        { icon: 'mdi-laptop', title: 'High Resolution', text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
        { icon: 'mdi-palette', title: 'Color Schemes', text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
        { icon: 'mdi-google-plus', title: 'Google Fonts', text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
        { icon: 'mdi-heart-outline', title: 'Clean Codes', text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." },
      ],

      // Our Customers
      imgCarouselCustomers: [
        { avatar: 'img/customer-1.jpg', name: 'Tomek', job: 'CEO', text: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore.' },
        { avatar: 'img/customer-2.jpg', name: 'Ghost', job: 'CTO', text: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore.' },
        { avatar: 'img/customer-3.jpg', name: 'Ghost', job: 'PTO', text: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore.' },
      ],

      // Meet The Team
      overlay: false,
      teamMembers: [
        { img: 'img/team-1.jpg', name: 'Tomek', spec: 'Product Manager', },
        { img: 'img/team-2.jpg', name: 'Ghost 1', spec: 'UI/UX Designer', },
        { img: 'img/team-3.jpg', name: 'Ghost 2', spec: 'Frontend Developer', },
        { img: 'img/team-4.jpg', name: 'Ghost 3', spec: 'CEO, Marketing' },
      ],
      teamSocialIcons: [
        { icon: 'mdi-twitter' },
        { icon: 'mdi-facebook' },
        { icon: 'mdi-google' },
        { icon: 'mdi-github-circle' },
      ],

      // Statistics
      statistics: [
        { icon: 'mdi-folder-outline', start: 0, count: '1000', title: 'Project' },
        { icon: 'mdi-note-multiple-outline', start: 0, count: '1000', title: 'Awards' },
        { icon: 'mdi-account-outline', start: 0, count: '1000', title: 'Happy Clients' },
        { icon: 'mdi-star-outline', start: 0, count: '1000', title: 'Total Rates' },
      ],

      // FQA
      panel: 0,
      fqaLists: [
        { icon: 'mdi-close', col3: '3', col9: "9", display: 'd-flex', title: 'Project 1', text: 'This is one of my previous works. Please feel free to check. Here is the link. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', img: 'img/faq-1.jpg' },
        { icon: 'mdi-close', col3: '0', col9: "12", display: 'd-none', title: 'Project 2', text: 'This is one of my previous works. Please feel free to check. Here is the link. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
        { icon: 'mdi-close', col3: '3', col9: "9", display: 'd-flex', title: 'Project 3', text: 'This is one of my previous works. Please feel free to check. Here is the link. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', img: 'img/faq-1.jpg' },
        { icon: 'mdi-close', col3: '0', col9: "12", display: 'd-none', title: 'Project 4', text: 'This is one of my previous works. Please feel free to check. Here is the link. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' }
      ],

      // Call To Action
      ctaBtn: [
        { icon: 'mdi-apple', text: 'App Store', href: "#!" },
        { icon: 'mdi-android', text: 'Goolge Play', href: "#!" },
        { icon: 'mdi-windows', text: 'Windows Store', href: "#!" }
      ],

      // Card
      cards: [
        {
          price: '19', plan: 'Basic 1',
          lists: [
            'Here we go. Please use the cards what you want.'
          ]
        },
        {
          price: '29', plan: 'Basic 2',
          lists: [
            'Here we go. Please use the cards what you want.'
          ]
        },
        {
          price: '49', plan: 'Basic 3',
          lists: [
            'Here we go. Please use the cards what you want.'
          ]
        },
        {
          price: '99', plan: 'Basic 4',
          lists: [
            'Here we go. Please use the cards what you want.'
          ]
        },
      ],

      // Blog Post
      blogPost: [
        { img: 'img/blog-1.jpg', title: 'Blog 1', date: '12.09.2024', comment: 55, text: 'Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.', author: 'Tomek' },
        { img: 'img/blog-2.jpg', title: 'Blog 2', date: '12.09.2023', comment: 24, text: 'Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.', author: 'Minato' },
        { img: 'img/blog-3.jpg', title: 'Blog 3', date: '12.09.2022', comment: 41, text: 'Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.', author: 'Ghost' },
      ],

      // Subscribe
      subsEmail: '',
      subsSnackbar: false,
      valid: true,

      emailSubsRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],

      // Info
      infoBoxes: [
        { icon: 'mdi-map-marker-outline', title: 'Address', text: '1234 Gifu, Japan', subtext: 'Gifu city' },
        { icon: 'mdi-phone', title: 'Phone', text: '+0123 456 789', subtext: 'Mon-Fri 8:00am - 8:00pm' },
        { icon: 'mdi-email-outline', title: 'Mail', text: 'incredibledev710@gmail.com', subtext: '24 X 7 online support' },
      ],
      iconColors: [
        { icon: 'mdi-twitter', color: 'blue' },
        { icon: 'mdi-facebook', color: 'blue darken-2' },
        { icon: 'mdi-google', color: 'red darken-1' },
        { icon: 'mdi-github-circle', color: 'grey darken-3' },
      ],

      // Google Map
      // map: "",
      // mapOptions: {},
      // marker: null

      // Contact Us
      contactName: '',
      contactEmail: '',
      contactSnackbar: false,
      contactValid: true,
      lazy: false,

      contactForm: [
        {
          rules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 12) || 'Name must be less than 12 characters',
          ], model: this.contactName, placeholder: 'Name*'
        },
        {
          rules:
            [
              v => !!v || "E-mail is required",
              v => /.+@.+\..+/.test(v) || "E-mail must be valid",
            ], model: this.contactEmail, placeholder: 'Email*'
        },
        {
          rules: [
            v => !!v || 'Phone is required',
            v => (v && v.length <= 12) || 'Phone number must be less than 12 characters',
          ], model: this.contactPhone, placeholder: 'Phone*'
        },
      ],

    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    // Navbar
    navbarScroll() {
      let navbar = document.querySelector('.navbar');
      let navLogo = document.querySelector('.navLogo');

      if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        navbar.classList.add('linear-background');
        navbar.classList.add('shadow');
        navbar.classList.remove('transparent');
        navLogo.style.width = '55px';
      } else {
        navbar.classList.remove('linear-background');
        navbar.classList.remove('shadow');
        navbar.classList.add('transparent');
        navLogo.style.width = '70px';
      }
    },
    selectTab() {
      this.selectedTab = this.tabs1.title && this.tabs2.title;
    },

    // Subscribe
    submit() {
      if (this.$refs.form.validate()) {
        this.valid;
        this.subsSnackbar = true
      }
    },

    // Contact Us
    validate() {
      if (this.$refs.contactForm.validate()) {
        this.contactSnackbar = true
      }
    },

    // Google Map
    initMap() {
      let uzb = { lat: 40.222229, lng: 69.270886 };
      let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: uzb });
      let marker = new google.maps.Marker({ position: uzb, map: map });
    },

    // Scroll To Top
    toTop() {
      window.scrollTo({
        top: 0
      });
    }
  },

  computed: {
    formIsValid() {
      return (
        this.subsEmail
      )
    }
  },

  // Owl Carousel
  directives: {
    carouselOne: {
      inserted(el) {
        $(el).owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            900: {
              items: 3
            }
          }
        })
      }
    },
    carouselTwo: {
      inserted(el) {
        $(el).owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          navClass: ['owl-prev', 'owl-next'],
          autoHeight: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            900: {
              items: 3
            }
          }
        })
      }
    },

  },

  created() {
    window.addEventListener('scroll', this.navbarScroll);
  },

})