import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Container from '../components/Container'
import User from '../components/User'

 const Index = (props) =>{
    return (
        <>
        <Container>
        <Head>
            <title>Next.jsProject -Main</title>
        </Head>
            <h1>Next</h1>
            <User users={props.users}/>
        </Container>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
   const res = await fetch('https://reqres.in/api/users');
   const resJSON = await res.json();
   return {users: resJSON.data}

}

export default Index