import { PubSub } from 'graphql-subscriptions'
import { Donation, Prisma } from '@prisma/client'
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql'

import { OrderByParams } from './../graphql'
import { DonationsService } from './donations.service'
import { DonationCreateInput } from './../@generated/prisma-nestjs-graphql/donation/donation-create.input'

const pubSub = new PubSub()

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  async create(
    @Args('createDonationInput') createDonationInput: DonationCreateInput
  ): Promise<Donation> {
    const created = await this.donationsService.create(createDonationInput)
    const total = await this.donationsService.getTotal()
    pubSub.publish('totalUpdated', { totalUpdated: { total } })
    return created
  }

  @Subscription()
  totalUpdated() {
    return pubSub.asyncIterator('totalUpdated')
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy?: OrderByParams): Prisma.PrismaPromise<Donation[]> {
    return this.donationsService.findAll(orderBy)
  }

  @Query('donation')
  findOne(@Args('id') id: number): Prisma.Prisma__DonationClient<Donation | null, null> {
    return this.donationsService.findOne({ id })
  }

  @Query('totalDonations')
  getTotalDonations() {
    return this.donationsService.getTotal()
  }
}
