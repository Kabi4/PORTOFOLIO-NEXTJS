import React from 'react'
import Layout from '../Components/Layout'

export default (props) => {
    return (
        <Layout title="ERROR REQUEST NOT FOUND">
            <br/>
           
            <p> {props.statusCode?`ERROR ${props.statusCode} Couldn't find any user of that name SORRY!`:"ERROR 400 Couldn't FIND YOUR PAGE SORRY!"}</p>
            <br/>
        </Layout>
    )
};
