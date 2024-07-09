"use client"
import React from 'react'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const router = useRouter()
    const [userData, setUserData] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmite = async(e) =>{
        e.preventDefault()
        try {
            const res = await axios.post("/api/user",userData)
            if (res.status===200) {
                setUserData([])
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthLayout
            title="Sign up for an account"
            subtitle={
                <>
                    Already registered?{' '}
                    <Link href="/login" className="text-primary-600">
                        Sign in
                    </Link>{' '}
                    to your account.
                </>
            }
        >
            <form onSubmit={handleSubmite}>
                <div className="grid grid-cols-2 gap-6">
                    <TextField
                        label="First name"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                        type="text"
                        autoComplete="given-name"
                        required

                    />
                    <TextField
                        label="Last name"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleChange}
                        type="text"
                        autoComplete="family-name"
                        required
                    />
                    <TextField
                        className="col-span-full"
                        label="Email address"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        type="email"
                        autoComplete="email"
                        required
                    />
                    <TextField
                        className="col-span-full"
                        label="Password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                    <SelectField
                        className="col-span-full"
                        label="How did you hear about us?"
                        name="referral_source"
                    >
                        <option>AltaVista search</option>
                        <option>Super Bowl commercial</option>
                        <option>Our route 34 city bus ad</option>
                        <option>The “Never Use This” podcast</option>
                    </SelectField>
                </div>
                <Button type="submit" color="primary" className="mt-8 w-full">
                    Get started today
                </Button>
            </form>
        </AuthLayout>
    )
}

export default RegisterForm
