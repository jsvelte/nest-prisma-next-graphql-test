import { Injectable } from '@nestjs/common'

import { Donation, Prisma } from '@prisma/client'
import { PrismaService } from './../../prisma/prisma.service'
import { CreateDonationInput } from './dto/create-donation.input'

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create = (createDonationInput: CreateDonationInput) => {
    return 'This action adds a new donation'
  }

  findAll = (): Prisma.PrismaPromise<Donation[]> => {
    return this.prisma.donation.findMany()
  }

  findOne = (
    donationWhereUniqueInput: Prisma.DonationWhereUniqueInput
  ): Prisma.Prisma__DonationClient<Donation | null, null> => {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput
    })
  }
}
