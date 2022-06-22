import { useRouter } from "next/router";
import {Fragment} from "react";
import Detail from "../../components/shopservice/detail";

const ProductsDetail = () => {
    const router = useRouter();
    const { pId } = router.query;

    return (
        <Fragment>
            <Detail Pid={pId} />
        </Fragment>
    )
}

export default ProductsDetail;