import { partners } from '../stores/crm.js'

const env = import.meta.env

const config = {
    headers: {
        'secret-key': env.VITE_SECRET_KEY,
    },
}

async function fetchPartners() {
    try {
        const response = await fetch(`${env.VITE_SERVER}/api/partners`, config)
        if (!response.ok) {
            console.error('API error:', response)
            return
        }
        const data = await response.json()
        partners.set(data.partners)
    } catch (error) {
        console.error('Error fetching products:', error)
    }
}
