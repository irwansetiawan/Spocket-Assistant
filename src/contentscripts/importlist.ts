
export function importListPrimary(response: object) {
    console.log(response);
}

interface ImportListDetails {
    id: string;
    listing_variations: ImportListingVariation[];
    shipping_countries: ImportShippingCountry[];
    shipping_domestic: ImportShippingCountry;
}

interface ImportListingVariation {
    characteristics: { [key: string]: string }[];
    currency: string;
    id: string;
    image: string|null;
    inventory: number;
    msrp_cents: number;
    price_cents: number;
    price_formatted: string;
    sku: string;
}

interface ImportShippingCountry {
    base_price_cents: number;
    base_price_formatted?: string;
    country?: string;
    delivery_time: string;
    incremental_price_cents?: string;
    incremental_price_formatted: string;
    price: number;
    price_formatted: string;
}

let importListDetailsData: ImportListDetails[] = [];

export function importListDetails (response: ImportListDetails) {
    if (importListDetailsData.filter(data => data.id === response.id).length > 0) {
        importListDetailsData = importListDetailsData.map(data => data.id === response.id ? response : data);
    } else {
        importListDetailsData.push(response);
    }
    if (response && response.listing_variations) {
        for (const index in response.listing_variations) {
            const variant = response.listing_variations[index];
            const findId = 'checkbox-' + index + '-' + variant.id + '-table';
            const findEl = document.getElementById(findId);
            if (findEl) {
                const productCard = findEl.closest('div[data-testid=import-list-product]');
                const table = findEl.closest('table');
                const row = findEl.closest('tr');
                if (table) {
                    const headerRow = table.querySelector('thead tr');
                    if (headerRow) {
                        const col = document.createElement('td');
                        col.innerHTML = 'Retail Price';
                        const ref = headerRow.querySelector('th:nth-child(7)');
                        if (ref) {
                            col.className = ref.className;
                            headerRow.insertBefore(col, ref);
                        }
                    }
                }
                if (row) {
                    const col = document.createElement('td');
                    col.innerHTML = (variant.msrp_cents/100).toString();
                    const ref = row.querySelector('td:nth-child(7)');
                    if (ref) {
                        col.className = ref.className;
                        row.insertBefore(col, ref);
                    }
                }
            }
        }
    }
}