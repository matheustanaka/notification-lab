import { Kafka } from 'kafkajs';
import { randomUUID } from 'crypto';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['star-cattle-10276-us1-kafka.upstash.io:9092'],

    sasl: {
      mechanism: 'scram-sha-256',

      username:
        'c3Rhci1jYXR0bGUtMTAyNzYkM3S3fbL9bBy_6Wss0MppGg6p5m1m7PT0TFe3M80',

      password:
        'i7ahGe7AQCn6g_rt2zAm2xEyCAsDR0uT_jMi_Qk1I43GFflE54h2utLFtWEYx8yxPnw_AA==',
    },

    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitacao de amizade!',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
