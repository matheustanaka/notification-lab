import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '../../../../app/entities/notification';
import { Content } from '../../../../app/entities/content';

// Converte o notification da camada de aplicacao para a camada de banco de dados.
// O notification da camada de aplicacao é diferente da entidade que está no banco de dados.
// Para camada de banco de dados reconhecer esse notification da aplicacao é necessário converte-lo através de mappers.
export class PrismaNotificationMapper {
  // Converte para o prisma
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
  // Converte para a aplicacao
  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
