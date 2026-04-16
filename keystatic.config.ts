import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        products: collection({
            label: 'Products',
            slugField: 'name',
            path: 'src/content/products/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({ name: { label: 'Name' } }),
                price: fields.integer({ label: 'Price (IDR)', defaultValue: 0 }),
                collection: fields.text({ label: 'Collection Name (e.g. Modern Heritage)' }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Clothing', value: 'clothing' },
                        { label: 'Accessories', value: 'accessories' },
                        { label: 'Footwear', value: 'footwear' },
                    ],
                    defaultValue: 'clothing',
                }),
                description: fields.text({ label: 'Short Description', multiline: true }),
                materialHeritage: fields.text({ label: 'Material & Heritage info', multiline: true }),
                mainImage: fields.image({
                    label: 'Main Image',
                    directory: 'src/assets/products',
                    publicPath: '@assets/products/',
                }),
                gallery: fields.array(
                    fields.image({
                        label: 'Gallery Image',
                        directory: 'src/assets/products',
                        publicPath: '@assets/products/',
                    }),
                    { label: 'Gallery', itemLabel: (props) => props.value?.filename || 'Gallery Image' }
                ),
                modelInfo: fields.object({
                    wearingSize: fields.text({ label: 'Wearing Size (e.g. Small (S))' }),
                    height: fields.text({ label: 'Model Height (e.g. 174 cm)' }),
                    bustWaist: fields.text({ label: 'Bust / Waist (e.g. 82 / 64 cm)' }),
                    modelImage: fields.image({
                        label: 'Model Image (Lihat di Badan)',
                        directory: 'src/assets/products',
                        publicPath: '@assets/products/',
                    }),
                }, { label: 'Model Measurement Information' }),
                sizeChart: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Field (e.g. Lingkar Dada)' }),
                        s: fields.text({ label: 'S' }),
                        m: fields.text({ label: 'M' }),
                        l: fields.text({ label: 'L' }),
                    }),
                    { label: 'Size Chart Table', itemLabel: (props) => props.fields.label.value || 'Row' }
                ),
            },
        }),
    },
});
