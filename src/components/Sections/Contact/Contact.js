import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { minLength, required, email } from "vuelidate/lib/validators"

import EmailService from '../../../services/EmailService'
import { APISettings } from '../../../api'

const EmailObj = new EmailService()

Vue.use(Vuelidate)

export default {
    name: 'Contact',
    props: {
    },
    data() {
        return {
            pageName: "contact",
            isDivisionShown: false,
            submitStatus: null,
            formData: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    validations: {
        formData: {
            name: {
                required,
                minLength: minLength(4)
            },
            email: {
                required,
                email
            },
            message: {
                required,
                minLength: minLength(5)
            }
        }
    },
    methods: {
        showSection(isVisible) {
            console.log("process.env: ", process.env)
            this.isDivisionShown = isVisible
        },
        onSubmit() {
            this.$v.$touch()
            if (this.$v.$invalid) {
              this.submitStatus = 'ERROR'
            } else {
              this.submitStatus = 'PENDING'
            }
            this.triggerEmail()
        },
        constructFormData() {
            return {
                "to": APISettings.adminEmailAddress,
                "subject": "Email from portfolio website",
                "text" : "Name: " + this.formData.name + "\nEmail: " + this.formData.email 
                            + "\nMessage: " + this.formData.message
            }
        },
        clearFormData() {
            this.formData.name = ""
            this.formData.message = ""
            this.formData.email = ""
        },
        triggerEmail() {
            //Perform axios call to send email
            let data = this.constructFormData()

            EmailObj.sendAdmin(data).then((response) => {
                let responseData = response.data.response
                if(responseData.result === 'success') {
                    // Hide Loader
                    alert("Thnk you for sending email, I will respond to it quickly")
                    this.submitStatus = 'OK'
                    this.clearFormData()
                } else {
                    // Hide Loader
                    alert("An error occured while sending email, Please try again")
                    this.submitStatus = 'OK'
                }
                }).catch((err) => {
                    // Hide Loader
                    alert("An error occured while sending email, Please try again")
                    this.submitStatus = 'OK'
                    console.log(err)
                })
        }
    }
}