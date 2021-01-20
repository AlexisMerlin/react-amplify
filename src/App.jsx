import React from 'react'
import Clock from './components/clock';
import { withAuthenticator } from '@aws-amplify/ui-react'
import {Auth} from "@aws-amplify/auth";
import awsExports from "./aws-exports";
Auth.configure(awsExports);

const App = () => {
    return (
        <>
            <h1>Este el componente principal</h1>
            <Clock></Clock>
        </>
    )
}

export default withAuthenticator(App);