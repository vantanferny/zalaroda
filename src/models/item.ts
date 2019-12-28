// inset shop param
const all = () => {
  const sampleAll = [
    {
      id: 1,
      name: "Jacket"
    },
    {
      id: 2,
      name: "Shoe"
    }
  ]

  return sampleAll
}

const fetchByShop = (shopId: number) => {
  const shopItems = [
    {
      id: 1,
      name: "Sample Fetched Shop Item Jacket",
    },
    {
      id: 2,
      name: "Sample Fetched Shop Item Shoe",
    }
  ]

  return shopItems
}

export default { all, fetchByShop }
