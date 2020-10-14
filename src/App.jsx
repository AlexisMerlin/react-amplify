import React from 'react'
import Clock from './components/clock';
import { withAuthenticator } from '@aws-amplify/ui-react'
import {Amplify} from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
    return (
        <>
            <h1>Este el componente principal</h1>
            <Clock></Clock>
        </>
    )
}

export default withAuthenticator(App);