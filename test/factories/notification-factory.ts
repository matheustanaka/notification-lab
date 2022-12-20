import { Content } from '../../src/app/entities/content';

import {
  Notification,
  NotificationProps,
} from '../../src/app/entities/notification';

// Factory Pattern

type Override = Partial<NotificationProps>; // Partial deixa todos os parametros como opcionais, dessa forma podemos sobrescrevelos

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitacao de amizade!'),
    recipientId: '2-example',
    ...override,
  });
}
