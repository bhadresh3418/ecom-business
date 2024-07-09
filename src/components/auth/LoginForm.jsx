"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const LoginForm = () => {
    const [loginData,setLoginData]=useState({})
    const router = useRouter()
    const handleChange = (e)=>{
        const name=e.target.name
        const value=e.target.value
        setLoginData({...loginData,[name]:value})
    }

    const submiteData =async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('/api/login',loginData)
            if (res.status === 200) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <AuthLayout
      title="Sign in to account"
      subtitle={
        <>
          Don’t have an account?{' '}
          <Link href="/register" className="text-primary-600">
            Sign up
          </Link>{' '}
          for a free trial.
        </>
      }
    >
      <form onSubmit={submiteData}>
        <div className="space-y-6">
          <TextField
            label="Email address"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Button type="submit" color="primary" className="mt-8 w-full">
          Sign in to account
        </Button>
      </form>
    </AuthLayout>
  )
}

export default LoginForm
