import { useRouter } from "next/router";

const Project = () =>{
    const router=useRouter()
    const {name} = router.query

    return <p>Project:{name}</p>
}
export default Project