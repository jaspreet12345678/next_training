import { useRouter } from "next/router";

function ReviewDetails() {
    const router = useRouter();
    const { productId, reviewId } = router.query;

    return <h1>Review {reviewId} for Product {productId}</h1>;
}

export default ReviewDetails;
