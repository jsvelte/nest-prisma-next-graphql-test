import { createClient as createWSClient } from 'graphql-ws'
import { Client, cacheExchange, fetchExchange, subscriptionExchange } from 'urql'

export const wsClient = createWSClient({
  url: 'ws://localhost:3001//graphql'
})

export const client = new Client({
  url: '/graphql',
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || '' }
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink)
            return { unsubscribe }
          }
        }
      }
    })
  ]
})
