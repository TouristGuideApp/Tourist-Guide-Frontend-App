import {useRouter} from "next/router";

function Specific({id}){
    return (
        <>
            <div>{id}</div>
        </>
    )
}

function specificImage(){
    const router = useRouter()
    const {id} = router.query
    return <Specific id={id}/>
}

export default specificImage