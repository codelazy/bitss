// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    name: 'bitss test',
    bitssListing: [
      {category: "Sale", 
        subCategories: [
          { subCategory: 'today.sale', price: '20', type: 'free'},
          { subCategory: 'special.sale', price: '20', type: 'premium'},
          { subCategory: 'anniv.sale', price: '20', type: 'premium'}, 
          ],
        totalPrice: '70',
        wholesale_package: 'no',
      },
      {category: "Promo", 
        subCategories: [
          { subCategory: 'todays.promo', price: '20'},
          { subCategory: 'now.promo', price: '20'},
          { subCategory: 'anniv.promo', price: '20'}, 
          ],
          totalPrice: '80',
      },
      {category: "Today", 
        subCategories: [
          { subCategory: 'reserve.today', price: '20'},
          { subCategory: 'sign-up.today', price: '20'},
          { subCategory: 'promo.today', price: '20'}, 
          ],
          totalPrice: '60',
      },
    ],
    categories: [
      { title: 'Sale', id: 0 },
      { title: 'Promo', id: 1 },
      { title: 'Today', id: 2 }
    ],
    subCategories: [
      { title: 'today.sale', id: 0, category: { id: 0 } },
      { title: 'special.sale', id: 1, category: { id: 0 } },
      { title: 'anniv.sale', id: 2, category: { id: 0 } },
      { title: 'todays.promo', id: 3, category: { id: 1 } },
      { title: 'now.promo', id: 4, category: { id: 1 } },
      { title: 'anniv.promo', id: 5, category: { id: 1 } },
      { title: 'reserve.today', id: 6, category: { id: 2 } },
      { title: 'sign-up.today', id: 7, category: { id: 2 } },
      { title: 'promo.today', id: 8, category: { id: 2 } }
    ],
    
  }))
}