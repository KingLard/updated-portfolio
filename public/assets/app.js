

    $('#emailSubmit').on('click', async function() {
        event.preventDefault()
        alert('email sent!')
        const email = $('#email').val()
        const topic = $('#topic').val()
        const message = $('#message').val()
      
        const info = { email, topic, message}

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }

        const response = await fetch('/myform', options)
        const data = await response.json()
        

    })

    

