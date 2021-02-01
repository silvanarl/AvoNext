module.exports = {
    images: {
      domains: ['https://avo-next.vercel.app/'],
    },
    rewrites: async () => {
      return [
        {
          source: '/avocado/:path*', //willcards - regex // lo que este aquí redigirá abajo
          destination: '/product/:path*' //acá
        }
      ]
    }
  }