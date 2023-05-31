import { Injectable } from '@nestjs/common'
import { Donation, Prisma } from '@prisma/client'

import { OrderByParams } from './../graphql'
import { PrismaService } from './../../prisma/prisma.service'

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create = (
    createDonationInput: Prisma.DonationCreateInput
  ): Prisma.Prisma__DonationClient<Donation, never> => {
    return this.prisma.donation.create({
      data: createDonationInput
    })
  }

  findAll = (orderBy?: OrderByParams): Prisma.PrismaPromise<Donation[]> => {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {}
    return this.prisma.donation.findMany({
      orderBy: {
        [field as any]: direction
      }
    })
  }

  findOne = (
    donationWhereUniqueInput: Prisma.DonationWhereUniqueInput
  ): Prisma.Prisma__DonationClient<Donation | null, null> => {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput
    })
  }

  getTotal = async (): Promise<number> => {
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count: true
      }
    })
    return response?._sum?.count as number
  }
}
