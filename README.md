# RabbitMQ Demo

Producer -> RabbitMQ -> Consumer (s)

1. Install Docker Image
  
	 ```docker run --name rabbitmp -p 5672:5672 rabbitmq```

2. Run Producer
   
	```npm run publisher <number>```

  stop producer

3. Run Consumer

   ```npm run consumer```
