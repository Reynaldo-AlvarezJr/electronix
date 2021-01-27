import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keyword' content={keywords}/>
            
        </Helmet>
    )
}

Meta.defaultProps = {
    title:'Welcome to Electronix',
    description: 'Where we sell the best products and you will find the best prices',
    keywords:'electronics, buy electronics, low prices electronics'
}


export default Meta


