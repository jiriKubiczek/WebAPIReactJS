import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Customers from './components/Customers';
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";


function App() {
    return (
        <ToastProvider autoDismiss={true}>
            <Provider store={store}>
                <Container maxWidth="lg">
                    <Customers /></Container>
            </Provider>
        </ToastProvider>
       
    );
}

export default App;