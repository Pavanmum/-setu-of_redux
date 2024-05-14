import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { decrement, fetchDataAsync, increment } from "../store/slices/dataPageSlice"
import { Button } from "antd"
import { getAllDetails } from "../store/api/home"


const Home = () => {
  const dispatch = useDispatch()

  const {data} = useSelector((state) => state.data)
  // const increment = useSelector((state) => state.dataSlice)
  // const decrement = useSelector((state) => state.dataSlice)
  console.log(data.products)
  const { pagination} = useSelector((state) => state.data)

  const handleinc = () => {
    dispatch(increment())
  }
  const handledec = () => {
    dispatch(decrement())
  }

  const disabled = pagination === 0 ?  true : false
  console.log(disabled)
  useEffect(() => {
    dispatch(fetchDataAsync(pagination))
  }, [dispatch,pagination])
  return (
    <div>
        <h1>hello</h1>
        {
          data.products?.map((item)=>{
            return(
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            )
          })
        }
        <Button type="primary"
        onClick={handleinc}
        >next</Button>
        <Button type="dashed"
        disabled={disabled}
        onClick={handledec}
        >Pervious</Button>
    </div>
  )
}

export default Home