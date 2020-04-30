let products = [
        { id: 1, name: 'item-1', price: 100.00 },
        { id: 2, name: 'item-2', price: 200.00 },
        { id: 3, name: 'item-3', price: 300.00 },
        { id: 4, name: 'item-4', price: 400.00 },
        { id: 5, name: 'item-5', price: 500.00 }
    ]
    // products.splice(0, 2)
products.splice(1, 3, { id: 0, name: 'ITEM-1', price: 100 })