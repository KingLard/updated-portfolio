

    // document.getElementById('emailSubmit').addEventListener('click', () => {

    //     event.preventDefault()

    //     let email = document.getElementById('email').value;
    //     let topic = document.getElementById('topic').value;
    //     let message = document.getElementById('message').value;
    
       
    //     console.log(email, topic, message)


    // })

    


    $('#emailSubmit').on('click', async function() {
        event.preventDefault()
        alert('Email Sent!')
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
        console.log(data)
        

    
        // await $.post("/myform", info, function(data, status) {
        //     alert(data + " " + status)
        // } )
    })

    

