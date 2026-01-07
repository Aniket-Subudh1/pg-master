import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/app/lib/mongodb'
import Waitlist from '@/app/models/Waitlist'

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const {
      name,
      email,
      pgName,
      beds,
      location,
      phone,
      role,
      category,
      agreeTerms,
    } = body

    // Validate required fields
    if (!name || !email || !pgName || !beds || !location || !phone || !role || !category) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate terms agreement
    if (!agreeTerms) {
      return NextResponse.json(
        { error: 'You must agree to the terms and conditions' },
        { status: 400 }
      )
    }

    // Validate phone number format
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit phone number' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Check if email or phone already exists
    const existingEntry = await Waitlist.findOne({
      $or: [{ email }, { phone }]
    })

    if (existingEntry) {
      if (existingEntry.email === email) {
        return NextResponse.json(
          { error: 'This email is already registered on the waitlist' },
          { status: 409 }
        )
      }
      if (existingEntry.phone === phone) {
        return NextResponse.json(
          { error: 'This phone number is already registered on the waitlist' },
          { status: 409 }
        )
      }
    }

    // Create new waitlist entry
    const waitlistEntry = await Waitlist.create({
      name,
      email,
      pgName,
      beds,
      location,
      phone,
      role,
      category,
      agreeTerms,
      status: 'pending'
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist',
        data: {
          id: waitlistEntry._id,
          name: waitlistEntry.name,
          email: waitlistEntry.email
        }
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Waitlist registration error:', error)

    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json(
        { error: messages.join(', ') },
        { status: 400 }
      )
    }

    // Handle MongoDB duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0]
      return NextResponse.json(
        { error: `This ${field} is already registered on the waitlist` },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
