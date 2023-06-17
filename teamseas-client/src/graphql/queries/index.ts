export const TotalDonationQuery = `
  query GetTotalDonations {
    totalDonations
  }
`

export const GetAllDonationsQuery = `
  query GetAllDonation($orderBy: OrderByParams) {
    donations(orderBy: $orderBy) {
      id
      count
      createdAt
      displayName
      email
      message
      mobile
      team
    }
  }
`
