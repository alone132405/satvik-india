const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@satvikindia.com' },
        update: {},
        create: {
            email: 'admin@satvikindia.com',
            password: adminPassword,
            name: 'Admin',
            role: 'ADMIN',
            phone: '+91 9876543210'
        }
    });
    console.log('✅ Admin user created:', admin.email);

    // Create products
    const products = [
        {
            name: 'Premium Raw Makhana - 50g',
            description: 'Pure, traditionally harvested raw makhana sourced from the pristine ponds of Bihar. Perfect for a healthy snack.',
            price: 99,
            size: '50g',
            stock: 100,
            image: '/makhana-product.jpg'
        },
        {
            name: 'Premium Raw Makhana - 100g',
            description: 'Pure, traditionally harvested raw makhana sourced from the pristine ponds of Bihar. Packed with modern hygiene standards.',
            price: 179,
            size: '100g',
            stock: 100,
            image: '/makhana-product.jpg'
        },
        {
            name: 'Premium Raw Makhana - 250g',
            description: 'Pure, traditionally harvested raw makhana sourced from the pristine ponds of Bihar. Family pack for regular consumption.',
            price: 399,
            size: '250g',
            stock: 100,
            image: '/makhana-product.jpg'
        },
        {
            name: 'Premium Raw Makhana - 500g',
            description: 'Pure, traditionally harvested raw makhana sourced from the pristine ponds of Bihar. Value pack for makhana lovers.',
            price: 699,
            size: '500g',
            stock: 100,
            image: '/makhana-product.jpg'
        },
        {
            name: 'Premium Raw Makhana - 1kg',
            description: 'Pure, traditionally harvested raw makhana sourced from the pristine ponds of Bihar. Bulk pack for families and businesses.',
            price: 1299,
            size: '1kg',
            stock: 50,
            image: '/makhana-product.jpg'
        }
    ];

    for (const product of products) {
        const created = await prisma.product.upsert({
            where: {
                id: product.size // Using size as a temporary unique identifier
            },
            update: product,
            create: product
        });
        console.log('✅ Product created:', created.name);
    }

    // Actually, let's just create them directly
    await prisma.product.deleteMany(); // Clear existing
    for (const product of products) {
        await prisma.product.create({ data: product });
    }
    console.log('✅ All products seeded');

    console.log('🎉 Database seeding completed!');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
