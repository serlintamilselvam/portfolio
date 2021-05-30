export const APISettings = {
    backEndUrl: (process.env.NODE_ENV === 'production') ? 'https://trigger-email-service.azurewebsites.net/' : process.env.VUE_APP_BACKEND_URL,
    adminEmailAddress: (process.env.NODE_ENV === 'production') ? 't.serlin94@gmail.com' : process.env.VUE_APP_ADMIN_EMAIL_ADDRESS,
    email: {
        sendToAdmin: 'email/send/info'
    }
}