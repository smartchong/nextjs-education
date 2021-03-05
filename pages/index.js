import Head from 'next/head'
import HomeHead from '@/HomePage/HomeHead'
import Public from '@/HomePage/Public'
import Recommend from '@/HomePage/Recommend'
import { getHome } from 'core/api'

export default function Home({ home = {} }) {
  const { banner } = home

  return (
    <div>
      <Head>
        <title>精品课首页</title>
      </Head>
      <main>
        <HomeHead banner={banner} />
        <Public />
        <Recommend />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getHome()

  return {
    props: {
      home: data,
    },
  }
}
