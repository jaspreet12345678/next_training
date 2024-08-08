import { useRouter } from "next/router";

function Doc(){
    const router = useRouter();
    const {params = [] } = router.query;
    if(params.length === 1){
        return <h1>Feature Page</h1>;
    }
    if(params.length === 2){
        return <h1>Concept Page</h1>;
    }

    if(params.length === 3){
        return <h1>Example Page</h1>;
    }

    return <h1>Jaspreet Doc Page</h1>
}

export default Doc;