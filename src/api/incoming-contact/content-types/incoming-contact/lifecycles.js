module.exports = {
    async afterCreate(event){
        const { result } = event;

        try{
            await strapi.plugins['email-designer'].services.email.sendTemplatedEmail({
                to: 'demenyador@gmail.com',
                from: 'no-reply@braincenter.ro',
            },
            {
                templateReferenceId: 1,
                subject: `Thank you for your order`,
            })
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'no-reply@braincenter.ro',
                subject: 'Contact Form',
                html: `${result.email}<br>${result.name}`,
            },
            {
                templateReferenceId: 1,
                subject: `Thank you for your order`,
            })
        } catch(err){
            console.log(err);
        }
    }
}