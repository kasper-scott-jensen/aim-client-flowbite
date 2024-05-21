import { partners } from '../stores/crm.js'
import { products } from '../stores/rackbeat.js'

const env = import.meta.env

const config = {
    headers: {
        'secret-key': env.VITE_SECRET_KEY,
    },
}

export async function fetchPartnersFromApi() {
    try {
        const response = await fetch(
            `${env.VITE_SERVER}/api/partners/all`,
            config,
        )
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        const data = await response.json()
        partners.set(data.partners)
        console.log(data.partners)
    } catch (error) {
        console.error('Error fetching products:', error)
    }
}

export async function fetchProductsFromApi() {
    try {
        const response = await fetch(
            `${env.VITE_SERVER}/api/products/current`,
            config,
        )
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        const data = await response.json()
        products.set(data.products)
        console.log(data.products)
    } catch (error) {
        console.error('Error fetching products:', error)
    }
}
