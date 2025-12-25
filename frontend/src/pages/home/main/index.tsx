import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store'

const Home = () => {

  const userName = useSelector(
    (state: RootState) => state.auth.userName
  )

  return (
    <div>
      ホーム画面
      {userName}
    </div>
  )
}

export default Home
