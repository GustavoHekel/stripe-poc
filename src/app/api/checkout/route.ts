import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

    const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'us_bank_account'],
            mode: 'setup',
            success_url: `http://localhost:3000/checkout-redirect?success=true`,
            cancel_url: `http://localhost:3000/checkout-redirect?cancel=true`,
            setup_intent_data: {
                description: 'Setup description'
            }
            // line_items: [{
            //     price_data: {
            //         unit_amount: 10000,
            //         currency: 'USD'
            //     }
            // }]
        });

        console.log(session)

        return NextResponse.json(session)

    } catch (err) {

        console.log({err})

    }

}