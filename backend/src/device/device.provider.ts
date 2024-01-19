import { Connection } from 'mongoose';
import { deviceSchema } from './schemas/device.schema';

export const deviceProviders = [
  {
    provide: 'DEVICE_MODEL',
    useFactory: (connection: Connection) => connection.model('Device', deviceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];