module.exports = {
    async afterCreate(event){
        const { result } = event;

        try{
            await strapi.plugins['email-designer'].services.email.sendTemplatedEmail({
                to: result.email,
                from: 'no-reply@braincenter.ro',
            },
            {
                templateReferenceId: 1,
                subject: `Braincenter - Contact Form Submission`,
            })
            await strapi.plugins["email"].services.email.send(
              {
                to: "info@braincenter.ro",
                //to: "braincenter.drbucur@gmail.com",
                //to: "demenyador@gmail.com",
                from: "no-reply@braincenter.ro",
                subject: "Contact Form",
                html: `<h2>New Contact Form Submission</h2><br>
                Name: ${result.name}<br>
                Email Address: ${result.email}<br>
                Phone Number: ${result.phone_number}<br>
                ${result.message ? 'Message: ' + result.message : ''}<br>
                ${result.type_of_contact || result.type_of_contact !== "contact" ? 'Application for: ' + result.type_of_contact : ''}`,
              },
              {
                templateReferenceId: 1,
                subject: `Thank you for your order`,
              }
            );
        } catch(err){
            console.log(err);
        }
    }
}
