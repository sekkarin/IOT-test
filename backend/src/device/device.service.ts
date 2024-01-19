import { Inject, Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './interfaces/device.interface';
import { Model, Types } from 'mongoose';

@Injectable()
export class DeviceService {
  constructor(
    @Inject('DEVICE_MODEL')
    private deviceModel: Model<Device>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto) {
    // const device = await this.deviceModel.findById('123');

    const newDevice = await this.deviceModel.create({
      userId: new Types.ObjectId(),
      name: 'string',
      password: 'string',
      selected: false,
      templateId: 'string',
      templateName: 'string',
    });
    return newDevice;
  }

  findAll() {
    return `This action returns all device`;
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
