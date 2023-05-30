import { Donation, Prisma } from '@prisma/client'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { OrderByParams } from './../graphql'
import { DonationsService } from './donations.service'

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  create(@Args('createDonationInput') createDonationInput: Prisma.DonationCreateInput) {
    return this.donationsService.create(createDonationInput)
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy?: OrderByParams): Prisma.PrismaPromise<Donation[]> {
    return this.donationsService.findAll(orderBy)
  }

  @Query('donation')
  findOne(@Args('id') id: number): Prisma.Prisma__DonationClient<Donation | null, null> {
    return this.donationsService.findOne({ id })
  }
}
