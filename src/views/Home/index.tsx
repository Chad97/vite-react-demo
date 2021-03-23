import React from 'react'
import { Alert } from 'antd';

interface Props {
  
}

const Home: React.FC<Props> = () => {
  return (
    <div>
        
        <Alert message="Home Page" type="success" />
    </div>
  )
}

export default Home
