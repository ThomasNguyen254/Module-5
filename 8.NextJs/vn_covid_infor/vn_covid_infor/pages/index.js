import Image from 'next/image'
import { Inter } from 'next/font/google'
import {ReflectAdapter as axios} from "next/dist/server/web/spec-extension/adapters/reflect";

const inter = Inter({ subsets: ['latin'] })

export default function Home({covidData}) {
  return (
      <>
        <h1>COVID-19 Dashboard for Vietnam</h1>
        <table className='table'>
          <thead>
          <tr>
            <td>Date</td>
            <td>Confirmed </td>
            <td>Active </td>
            <td>Recovered </td>
            <td>Deaths</td>
          </tr>
          </thead>
          <tbody>
          {covidData.map((covid,key) =>(
              <tr key={key}>
                <td>{covid.Date}</td>
                <td>{covid.Confirmed}</td>
                <td>{covid.Active}</td>
                <td>{covid.Recovered}</td>
                <td>{covid.Deaths}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </>
  )
}
export const getStaticProps = async () => {
  try {
    const response = await axios.get('http://localhost:8080/covid');
    const covidData = response.data
    return {
      props: {
        covidData: covidData
      }
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        covidData: [],
      }
    }
  }

}
