


    document.getElementById('emailSubmit').addEventListener('click', () => {

        event.preventDefault()

        let email = document.getElementById('email').value;
        let topic = document.getElementById('topic').value;
        let message = document.getElementById('message').value;
    
        let emailData = {
            email,
            topic,
            message
        }
    
        console.log(emailData)

    })


    

