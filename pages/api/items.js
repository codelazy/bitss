// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.statusCode = 200;
  res.json({
    
    name: "j",
    items: [
      { "id": 1, "name": "Apples",  "price": "$2" },
      { "id": 2, "name": "Peaches", "price": "$5" }
    ] 
  })
}