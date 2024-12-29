import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container text-center text-4xl font-bold">
      <h3 className="font-palanquin">
        What Our <span className="text-coral-red">Customer</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        I am extremely satisfied with my purchase! The product exceeded my
        expectations in both quality and performance. The customer service was
        fantastic. for more!
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
