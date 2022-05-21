const amqp = require("amqplib")

async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel()
        const result = await channel.assertQueue("jobs")

        // channel.consume("jobs", message => {
        //     console.log(message.content.toString())
        // })
        channel.consume("jobs", message => {
            input = JSON.parse(message.content.toString())
            console.log(input.number)
            
            // if (input.number == 7) {
                channel.ack(message)
            // }
        })

        console.log("Waiting for messages!")

    } catch (error) {
        console.log(error)
    }
}

connect()