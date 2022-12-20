import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        brokers: ['star-cattle-10276-us1-kafka.upstash.io:9092'],

        sasl: {
          mechanism: 'scram-sha-256',

          username:
            'c3Rhci1jYXR0bGUtMTAyNzYkM3S3fbL9bBy_6Wss0MppGg6p5m1m7PT0TFe3M80',

          password:
            'i7ahGe7AQCn6g_rt2zAm2xEyCAsDR0uT_jMi_Qk1I43GFflE54h2utLFtWEYx8yxPnw_AA==',
        },

        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
