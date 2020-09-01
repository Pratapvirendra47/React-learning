import React from 'react';
import axios from 'axios';
import {getResponseDATA, getNewResponseData} from './helper';

export async function getAPIdata() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        console.log(response)
        return response;
    })
}